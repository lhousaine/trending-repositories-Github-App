FROM node:12.0-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# To bundle your app's source code inside the Docker image, use the COPY instruction:
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]