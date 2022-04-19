FROM node:latest

WORKDIR /node

COPY . /node

RUN npm i

ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_USERNAME=proxy_user
ENV DB_PASSWORD=0000
ENV DB_NAME=proxy_db

EXPOSE 5000

CMD npm run start:dev