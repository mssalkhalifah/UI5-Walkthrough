FROM node:16.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install -g @ui5/cli@3.1.1

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]