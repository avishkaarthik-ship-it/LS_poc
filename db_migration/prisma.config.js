// prisma.config.js
require("dotenv").config();
const { defineConfig } = require("prisma/config");

console.log("Database URL:", process.env.DATABASE_URL);

module.exports = defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    provider: "postgresql",
  },
});
