FROM node:20.1-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install 

COPY .env ./
COPY tsconfig.json ./
COPY src/prisma ./src/prisma

COPY . .

RUN npx prisma generate --schema ./src/prisma/schema.prisma
# RUN npx prisma migrate dev --name init --schema ./src/prisma/schema.prisma

EXPOSE 6060
EXPOSE 5432

RUN yarn build 

CMD ["node", "./dist/server.js"]
