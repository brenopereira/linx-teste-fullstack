module.exports = {
  username: "root",
  password: "",
  database: "linx",
  host: "127.0.0.1",
  dialect: "mongodb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
