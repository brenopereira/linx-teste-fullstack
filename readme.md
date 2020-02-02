# Linx - Fullstack

That's `docker-compose.yml` file finded into infrastructure folder, contain the config from docker microservices and database using PostgreSQL.

## Runnig the microservices and proxy reverse

```
$ cd infrastructure/
$ docker-compose up -d
```

`linx.service.env - Contains the database user settings.`

Due to a bug, I don't know if it is due to Linux, but it is necessary to enter the product container and manually run the commands:

```
$ sequelize db:migrate
$ node import-database.js
```

## Explanation - Microservice Product

The json file sent to import, is inside the product folder, where you can run it with the following command, to import the bank, but the docker already does it for you! : D

```
node import-database.js
```

## Explanation - Microservice Catalog Product

The service queries neemu's algorithm through a service and after consuming the service, consumes the internal product service to retrieve information via the service route that runs at http://localhost:3001/products/{ID PRODUCT}/{SEARCH TYPE}

The service is consuming the types of searches, consuming the micro-service but it is not displayed due to the promise to have to consume the services in stages, passing directly to the response and not filling the due array, even with the await indicated in the requests and phases.

## Frontend

The frontend was isolated using the gulp functions to compile, minify and watch the changes in the files so that it is compiled in real time, however the template was not applied due to time.

## Doubts or prevention

If the docker does not run as expected, there are usually problems with the docker bridge on windows, I recommend running the isolated services.

### First terminal

In root directory from project, run the commands

```
$ npm install
$ node index.js
```

### Second terminal

In root directory from project, run the commands

```
$ cd products
$ npm install
$ npm i -g sequelize-cli
$ sequelize db:migrate
$ node index.js
```

### Third terminal

In root directory from project, run the commands

```
$ cd products-catalog
$ node index.js
```
