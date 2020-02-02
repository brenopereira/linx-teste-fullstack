FROM node:10.18.1

ADD . /services/products

RUN cd /services/products; \
  npm install; \
  npm install -g sequelize-cli; \
  sequelize db:migrate; \
  node import-database.js

EXPOSE 3001

CMD ["node", "/services/products/index.js"]