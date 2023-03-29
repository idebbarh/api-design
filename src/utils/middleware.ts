import { validationResult } from "express-validator";

function handleErrors(req, res, next) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  next();
}
export default handleErrors;
