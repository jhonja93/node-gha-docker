# Imagen base
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero package*.json para aprovechar cache
COPY package*.json ./

# Instalación de dependencias (solo prod)
RUN npm ci --omit=dev

# Copiamos el resto del código
COPY . .

# Puerto
EXPOSE 3000

# Comando de inicio
CMD ["node", "index.js"]
