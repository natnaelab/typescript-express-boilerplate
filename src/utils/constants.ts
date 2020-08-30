export const PORT: number = Number(process.env.PORT) || 3000;
export const isProd: boolean = process.env.NODE_ENV === "production";
export const MONGODB_URI: string =
   process.env.MONGODB_URI || "mongodb://localhost:27017/typescript-express";
