import mongoose from 'mongoose';

import environment from '../configs/environment';

const { DB_HOST, DB_PORT, DB_NAME } = environment;

const MONGODB_CONNECTION_STRING = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

class AppDataSource {
  static connect() {
    return mongoose.connect(MONGODB_CONNECTION_STRING);
  }
  static async close() {
    await mongoose.connection.close();
    return mongoose.disconnect();
  }
}

export default AppDataSource;
