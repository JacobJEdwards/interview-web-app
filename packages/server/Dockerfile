FROM node:20.1-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install 

COPY . .

EXPOSE 6060

RUN yarn build 

CMD ["node", "dist/server.js"]
