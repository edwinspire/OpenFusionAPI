# OPEN FUSION API
# edwinspire@gmail.com
# Usar una imagen
FROM node:24-trixie-slim

# Variables de Entorno
ENV HOST=:: \
    PUBLIC_API_SERVER_HOST="" \
    PORT=3000 \
    BUILD_DB=true

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar herramientas adicionales necesarias
# Incluye git y nano; agrega bash si es necesario para scripts complejos
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    git \
    nano \
    wget \
    curl \
    iputils-ping \
    logrotate \
    bash && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Clonar la aplicación desde el repositorio
RUN git clone https://github.com/edwinspire/OpenFusionAPI.git .

# Eliminar archivos previos (node_modules y package-lock.json)
RUN rm -rf node_modules package-lock.json

RUN npm install 

# Instalar PM2 globalmente
RUN npm install pm2 -g

# Instalar el módulo de rotación de logs de PM2
RUN pm2 install pm2-logrotate \
    && pm2 set pm2-logrotate:max_days 5 \
    && pm2 set pm2-logrotate:retain 5

# Ejecutar la compilación de la aplicación
RUN npm run build

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación con PM2
CMD ["pm2-runtime", "start", "process.yml"]


# docker system prune -a // Elimina todas las imágenes no utilizadas, contenedores detenidos, volúmenes y redes no utilizados