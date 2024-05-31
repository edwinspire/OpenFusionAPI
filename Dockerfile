# Usar una imagen base oficial de Node.js
FROM node:21-bullseye-slim

# Declarar variables de entorno
# ENV NODE_ENV development

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY . .

# Actualizar los paquetes y herramientas del sistema
RUN apt-get update && apt-get install -y git && apt-get clean && rm -rf /var/lib/apt/lists/*

# Eliminar node_modules y package-lock.json
RUN rm -rf node_modules package-lock.json

# Instalar las dependencias de la aplicación
RUN npm install

# Instalar PM2 globalmente
RUN npm install pm2 -g

# Ejecutar la compilación de la aplicación
RUN npm run build

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

#
ENV HOST=:: 

# Comando para iniciar la aplicación con PM2
CMD ["pm2-runtime", "start", "process.yml"]
