FROM node:21-bullseye-slim

WORKDIR /app

COPY . .
RUN apt-get -y update
RUN apt-get -y install git
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]