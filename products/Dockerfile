FROM node:10.18.1

ADD . /services/products

RUN cd /services/products; \
  npm install; \
  npm i -g sequelize-cli; \
  git clone https://github.com/vishnubob/wait-for-it.git; \
  chmod +X entry.sh; \
  sh entry.sh

EXPOSE 3001

CMD ["node", "/services/products/index.js"]