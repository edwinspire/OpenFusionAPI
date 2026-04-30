# OPEN FUSION API
# edwinspire@gmail.com

# ─────────────────────────────────────────────────────────────────────────────
# Etapa 1 – builder: instala deps (incluyendo dev) y compila la app
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-bookworm-slim AS builder

# Por defecto conserva devDependencies en la imagen final.
# Para omitirlas: docker build --build-arg OMIT_DEV_DEPENDENCIES=true ...
ARG OMIT_DEV_DEPENDENCIES=false

ENV PUPPETEER_SKIP_DOWNLOAD=true

WORKDIR /app

# git y ssh son necesarios para instalar deps desde repositorios GitHub
RUN apt-get update && apt-get install -y --no-install-recommends git openssh-client ca-certificates \
    && git config --system --add url."https://github.com/".insteadOf ssh://git@github.com/ \
    && git config --system --add url."https://github.com/".insteadOf git@github.com: \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copiar manifiestos para cache de dependencias
COPY package*.json ./

# Instalar todas las dependencias (incluyendo devDependencies)
RUN if [ -f package-lock.json ]; then npm ci --include=dev; else npm install --include=dev; fi

# Copiar el resto del código fuente
COPY . .

# Compilar la aplicación (genera ./www con el frontend estático)
RUN npm run build

# Omitir devDependencies solo si se solicita explícitamente en build time
RUN if [ "$OMIT_DEV_DEPENDENCIES" = "true" ]; then npm prune --omit=dev; fi

# ─────────────────────────────────────────────────────────────────────────────
# Etapa 2 – runtime: imagen final reducida con solo lo necesario en producción
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-bookworm-slim

ARG OMIT_DEV_DEPENDENCIES=false

# Variables de Entorno
ENV HOST=:: \
    NODE_ENV=production \
    PUBLIC_API_SERVER_HOST="" \
    PORT=3000 \
    BUILD_DB=true \
    PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

WORKDIR /app

# Instalar herramientas del sistema y dependencias de Chromium
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    chromium \
    fonts-liberation \
    git \
    iputils-ping \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcairo2 \
    libdrm2 \
    libgbm1 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxkbcommon0 \
    libxrandr2 \
    logrotate \
    nano \
    wget \
    xdg-utils \
    bash \
    curl && \
    apt-get autoremove -y && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Copiar artefactos del builder:
#   - node_modules Linux (con devDependencies por defecto; opcionalmente sin dev)
#   - código fuente y output de compilación
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/server ./server
COPY --from=builder /app/src ./src
COPY --from=builder /app/www ./www
COPY --from=builder /app/static ./static
COPY --from=builder /app/docs ./docs
COPY --from=builder /app/process.yml ./process.yml
COPY --from=builder /app/svelte.config.js ./svelte.config.js
COPY --from=builder /app/vite.config.js ./vite.config.js
COPY --from=builder /app/jsconfig.json ./jsconfig.json

# Instalar PM2 globalmente
RUN npm install pm2 -g

# Instalar el módulo de rotación de logs de PM2
RUN pm2 install pm2-logrotate \
    && pm2 set pm2-logrotate:max_days 2 \
    && pm2 set pm2-logrotate:retain 2

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación con PM2 en modo producción
CMD ["pm2-runtime", "start", "process.yml", "--env", "production"]

# docker system prune -a // Elimina todas las imágenes no utilizadas, contenedores detenidos, volúmenes y redes no utilizados
