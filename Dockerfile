FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
COPY .env ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "start"]