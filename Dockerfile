# OPEN FUZION API
# edwinspire@gmail.com

# Usar una imagen base ligera de Node.js
FROM node:lts-alpine

# Variables de Entorno
ENV HOST="::" \
    PUBLIC_API_SERVER_HOST="" \
    PORT=3000 \
    BUILD_DB=true

# Instalar Git (y otras herramientas si es necesario)
RUN apk add --no-cache git

# Crear y establecer el directorio de trabajo para la aplicación
WORKDIR /app

# Clonar el repositorio de la aplicación
RUN git clone https://github.com/edwinspire/OpenFusionAPI.git /app

# Cambiar al directorio de la aplicación
WORKDIR /app

# Limpiar posibles instalaciones previas y el caché de npm
RUN rm -rf node_modules package-lock.json && \
    npm cache clean --force

# Instalar las dependencias sin auditoría ni fondos
RUN npm install --no-fund --no-audit

# Instalar PM2 globalmente sin auditoría
# RUN npm install pm2 -g --no-fund --no-audit

# Compilar la aplicación
# RUN npm run build

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación con PM2
CMD ["pm2-runtime", "start", "process.yml"]
