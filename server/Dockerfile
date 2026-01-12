FROM node:20-alpine


RUN apk add --no-cache python3 make g++

WORKDIR /app

# cache npm install
COPY package*.json ./
RUN npm ci

# copy source
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
