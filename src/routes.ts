import * as express from "express";

import controllers from "./controllers";

class Routes {
   public router: express.IRouter;

   constructor() {
      this.router = express.Router();
      this.routes();
   }

   public routes(): void {
      this.router.get("/", controllers.helloWorld);
   }
}

export default new Routes().router;
