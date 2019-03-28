FROM node:10.11

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN npm install

CMD ["npm", "run", "production"]