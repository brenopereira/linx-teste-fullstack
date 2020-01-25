FROM node:10.18.1

ADD . /services/catalog

RUN cd /services/catalog; \
  npm install

EXPOSE 3002

CMD ["node", "/services/catalog/index.js"]
