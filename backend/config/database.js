module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("POSTGRES_DATABASE_HOST"),
      port: env.int("POSTGRES_DATABASE_PORT"),
      database: env("POSTGRES_DATABASE_NAME"),
      user: env("POSTGRES_DATABASE_USERNAME"),
      password: env("POSTGRES_DATABASE_PASSWORD"),
      ssl: env.bool("POSTGRES_DATABASE_SSL"),
    },
  },
});
