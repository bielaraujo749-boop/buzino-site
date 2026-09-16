FROM node:24

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["node", "dist/buzino-site/server/server.mjs"]