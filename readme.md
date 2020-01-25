# Linx - Fullstack

That's `docker-compose.yml` file finded into infrastructure folder, contain the config from docker microservices and database using PostgreSQL.

## Runnig the microservices and proxy reverse

```
$ cd infrastructure/
$ docker-compose up -d
```

`linx.service.env - Contains the database user settings.`

## Explanation - Microservice Product

It contains the connection to the database and is also a REST API for displaying the data in JSON format.

## Explanation - Microservice Catalog Product

It contains the connection to the database and is also a REST API for displaying the data in JSON format.