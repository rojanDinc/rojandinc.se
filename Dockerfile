FROM node:16.20.2-bookworm

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

CMD ["node", "server.js"]
