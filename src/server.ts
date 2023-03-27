import express from "express";
import router from "./router";
import morgan from "morgan";
import protector from "./utils/protector";
const app = express();
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  req.theName = "Ismail";
  next();
});

//routes
app.use("/api", protector, router);
export default app;
