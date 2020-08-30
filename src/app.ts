import * as express from "express";
import * as morgan from "morgan";
import { join } from "path";
import { createWriteStream } from "fs";

import routes from "./routes";
import { isProd } from "./utils/constants";
import forceHttps from "./middlewares/force_https";
import config from "./config";

class App {
   public app: express.Application;

   constructor() {
      this.app = express();
      config.initializeDb();
      this.initMiddlewares();
      this.app.use(routes);
   }

   private initMiddlewares(): void {
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      if (isProd) {
         let accessLogStream = createWriteStream(
            join(__dirname, "../logs/access.log"),
            { flags: "a" }
         );
         this.app.use(morgan("combined", { stream: accessLogStream }));
         this.app.use(forceHttps);
      } else {
         this.app.use(morgan("dev"));
      }
   }
}

export default new App().app;
