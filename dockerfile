FROM node:10.16.1


WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm install -g @angular/cli@8.2.0

CMD ng serve -o
