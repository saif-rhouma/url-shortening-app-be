import pc from 'picocolors';
import AppDataSource from './data-source';
class Database {
  retries = 10;
  retryInterval = 5000; // 5 seconds

  connect() {
    return AppDataSource.connect()
      .then(() => {
        console.log(pc.inverse(pc.greenBright(`Server is Connected To Database Successfully`)));
      })
      .catch((error) => {
        console.error('Failed to connect to database:', error);
        if (this.retries > 0) {
          console.log(`Retrying in ${this.retryInterval / 1000} seconds...`);
          this.retries--;
          setTimeout(this.connect, this.retryInterval);
        }
      });
  }

  close() {
    return AppDataSource.close();
  }
}

export default new Database();
