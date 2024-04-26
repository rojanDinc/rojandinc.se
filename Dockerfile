FROM node:16.20.2 AS builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM nginx:1.25.5-alpine

COPY --from=builder /app/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
