module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("POSTGRES_DATABASE_HOST", "127.0.0.1"),
      port: env.int("POSTGRES_DATABASE_PORT", 5432),
      database: env("POSTGRES_DATABASE_NAME", "strapi"),
      user: env("POSTGRES_DATABASE_USERNAME", ""),
      password: env("POSTGRES_DATABASE_PASSWORD", ""),
    },
    useNullAsDefault: true,
  },
});
