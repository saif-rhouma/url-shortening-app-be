import { cleanEnv, host, port, str, num } from 'envalid';

const environment = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
  SHORT_URL_LENGTH: num(),
  PORT: port(),
  DB_TYPE: str({ choices: ['mysql', 'sqlite', 'mongodb'] }),
  DB_HOST: host(),
  DB_PORT: port(),
  DB_NAME: str(),
  DB_USER: str(),
  DB_PASSWORD: str(),
});

export default environment;
