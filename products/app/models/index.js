const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../../config/database.js");
const db = {};

const Redis = require("ioredis");
const redis = new Redis({
  host: "192.168.16.2"
});

const RedisAdaptor = require("sequelize-transparent-cache-ioredis");
const redisAdaptor = new RedisAdaptor({
  client: redis,
  namespace: "model",
  lifetime: 60 * 60
});

const sequelizeCache = require("sequelize-transparent-cache");
const { withCache } = sequelizeCache(redisAdaptor);

const sequelize = new Sequelize(config);

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf(".") !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === ".js"
  )
  .forEach(file => {
    const model = withCache(sequelize.import(path.join(__dirname, file)));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

async function test() {
  await sequelize.sync();
}

test();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
