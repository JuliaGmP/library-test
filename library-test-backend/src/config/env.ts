const dotenv = require('dotenv');
const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env file");
}

export const postgresUrl: string | undefined = process.env.POSTGRESQL_URL;

