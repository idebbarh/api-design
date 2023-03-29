import express from "express";
import router from "./router";
import morgan from "morgan";
import protector from "./utils/protector";
import { createUser, signin } from "./handlers/user";
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

app.post("/signup", createUser);
app.post("/login", signin);
export default app;
