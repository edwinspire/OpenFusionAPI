# OPEN FUSION API
# edwinspire@gmail.com
# Usar una imagen LTS basada en Debian estable
FROM node:22-bookworm-slim

# Variables de Entorno
ENV HOST=:: \
    NODE_ENV=production \
    PUBLIC_API_SERVER_HOST="" \
    PORT=3000 \
    BUILD_DB=true \
    PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar herramientas adicionales necesarias y dependencias de Chromium
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
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

# Copiar manifiestos para aprovechar la cache de dependencias
COPY package*.json ./

# Instalar dependencias del proyecto necesarias para build
RUN if [ -f package-lock.json ]; then npm ci --include=dev; else npm install --include=dev; fi

# Copiar el resto del código fuente
COPY . .

# Instalar PM2 globalmente
RUN npm install pm2 -g

# Instalar el módulo de rotación de logs de PM2
RUN pm2 install pm2-logrotate \
    && pm2 set pm2-logrotate:max_days 3 \
    && pm2 set pm2-logrotate:retain 3

# Ejecutar la compilación de la aplicación y eliminar dependencias de desarrollo
RUN npm run build \
    && npm prune --omit=dev

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación con PM2 en modo producción
CMD ["pm2-runtime", "start", "process.yml", "--env", "production"]


# docker system prune -a // Elimina todas las imágenes no utilizadas, contenedores detenidos, volúmenes y redes no utilizados
