import * as express from "express";

class Controller {
   helloWorld: express.RequestHandler = (req, res) => {
      res.json({ hello: "world" });
   };
}

export default new Controller();
