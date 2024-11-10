#!/bin/bash

# Verificar si se está ejecutando como root o con permisos sudo
if [ "$EUID" -ne 0 ]; then
  echo "Por favor, ejecute el script con sudo o como root"
  exit 1
fi

# Eliminar todo el contenido de la carpeta /app
echo "Eliminando el contenido de /app..."
rm -rf /app/*

# Clonar el repositorio en /app
echo "Clonando el repositorio en /app..."
git clone https://github.com/edwinspire/OpenFusionAPI.git /app

# Ingresar en la carpeta /app
cd /app || exit

# Instalar dependencias de la aplicación
echo "Instalando dependencias de la aplicación..."
npm install --no-fund --no-audit

# Instalar PM2 globalmente
echo "Instalando PM2 globalmente..."
npm install pm2 -g --no-fund --no-audit

# Ejecutar la compilación de la aplicación
echo "Compilando la aplicación..."
npm run build

echo "Configuración completada exitosamente."
