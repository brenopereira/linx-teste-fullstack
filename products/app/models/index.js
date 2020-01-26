const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../../config/database.js");
const db = {};

const Redis = require("ioredis");
const redis = new Redis();

const RedisAdaptor = require("sequelize-transparent-cache-ioredis");
const sequelizeCache = require("sequelize-transparent-cache");

const redisAdaptor = new RedisAdaptor({
  client: redis,
  namespace: "model",
  lifetime: 60 * 60
});

const { withCache } = sequelizeCache(redisAdaptor);
const User = withCache(sequelize.import("./products"));

const sequelize = new Sequelize(config);

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf(".") !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === ".js"
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
