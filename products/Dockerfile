FROM node:10.18.1

ADD . /services/products

RUN cd /services/products; \
  npm install; \
  npm i -g sequelize-cli

EXPOSE 3001

CMD ["node", "/services/products/index.js"]