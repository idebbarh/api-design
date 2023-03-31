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

//routes
app.use("/api", protector, router);
app.post("/signup", createUser);
app.post("/login", signin);

//error handler
app.use((err, req, res, next) => {
  let message;
  let status;
  switch (err.type) {
    case "auth":
      message = "unauthorized";
      status = 400;
      break;

    case "input":
      message = "invalid input";
      status = 400;
      break;

    default:
      message = "internal server error";
      status = 500;
      break;
  }
  res.status(status).json({ message });
});
export default app;
