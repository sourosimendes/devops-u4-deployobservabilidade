FROM node:20

WORKDIR /app

COPY aplicacao/package*.json ./

RUN npm install

COPY aplicacao .

EXPOSE 3000

CMD ["node", "servidor.js"]
