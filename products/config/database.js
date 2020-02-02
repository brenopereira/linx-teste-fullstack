module.exports = {
  database: "postgres",
  username: "postgres",
  password: "postgres",
  host: "db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
};
