import { connectMongo } from "./db";

class Config {
   public initializeDb() {
      return connectMongo();
   }
}

export default new Config();
