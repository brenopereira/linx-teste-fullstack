FROM node:10.18.1

ADD . /app

RUN cd /app; \
  npm install

EXPOSE 3000

CMD ["node", "/app/index.js"]
