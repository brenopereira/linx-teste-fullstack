module.exports = {
  database: process.env.POSTGRES_DB || "postgres",
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  host: process.env.POSTGRES_HOST || "192.168.16.3",
  dialect: "postgres"
};
