FROM node:16
WORKDIR /srv/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["node", "build/index.js"]