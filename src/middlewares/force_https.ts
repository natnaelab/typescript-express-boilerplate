import { RequestHandler } from "express";

const forceHTTPS: RequestHandler = (req, res, next) => {
   if (!req.secure) {
      return res.redirect(`https://${req.get("host")}${req.url}`);
   }
   next();
};

export default forceHTTPS;
