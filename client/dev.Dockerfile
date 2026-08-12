FROM node:24

WORKDIR /usr/src/app

COPY . .

ENV VITE_BE_URL=

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]