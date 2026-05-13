# OPEN FUSION API
# edwinspire@gmail.com
# Imagen LTS Debian completa, adecuada para Chromium y dependencias gráficas del sistema
FROM node:22-bookworm

# Variables de Entorno
ENV HOST=:: \
    PORT=3000 \
    BUILD_DB=true \
    PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar herramientas adicionales necesarias y dependencias de Chromium
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends ca-certificates \
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
COPY package.json package-lock.json ./

# Instalar dependencias del proyecto (incluyendo siempre devDependencies)
RUN npm ci --include=dev

# Copiar el resto del código fuente
COPY . .

# Instalar PM2 globalmente
RUN npm install pm2 -g

# Instalar el módulo de rotación de logs de PM2
RUN pm2 install pm2-logrotate \
    && pm2 set pm2-logrotate:max_days 2 \
    && pm2 set pm2-logrotate:retain 2

# Ejecutar la compilación de la aplicación
RUN npm run build

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación con PM2
CMD ["pm2-runtime", "start", "process.yml"]


# docker system prune -a // Elimina todas las imágenes no utilizadas, contenedores detenidos, volúmenes y redes no utilizados