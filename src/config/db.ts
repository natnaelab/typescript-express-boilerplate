import * as mongoose from "mongoose";

import { MONGODB_URI } from "../utils/constants";

export const connectMongo = async () => {
   try {
      mongoose.set("useNewUrlParser", true);
      mongoose.set("useUnifiedTopology", true);
      let connection = await mongoose.connect(MONGODB_URI);
      return connection.connection.db;
   } catch (e) {
      console.error(e);
      console.log("DB connection failed");
      process.exit();
   }
};
