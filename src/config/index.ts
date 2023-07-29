const dotEnv = require("dotenv");

if (process.env.NODE_ENV === "prod") {
  const configFile = `./.env.prod`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT,
};