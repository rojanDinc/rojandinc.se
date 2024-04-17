FROM node:16.20.2-alpine3.18

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn --network-timeout 100000

COPY . .

RUN yarn build

CMD ["node", "server.js"]
