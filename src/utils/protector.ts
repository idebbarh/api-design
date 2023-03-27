import jwt from "jsonwebtoken";

function serverResponse(res, msg, code) {
  res.status(code);
  res.send(msg);
  return;
}

async function protector(req, res, next) {
  const bearer = req.headers.authorization;
  if (!bearer) {
    return serverResponse(res, "not auth", 401);
  }

  if (bearer.split(" ").length !== 2) {
    return serverResponse(res, "invalid token", 401);
  }

  const [, token] = bearer.split(" ");

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    serverResponse(res, "invalid token", 401);
  }
}
export default protector;
