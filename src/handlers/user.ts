import client from "../db";
import createJWT from "../utils/auth";
import { comparePasswords, hashPassword } from "../utils/hashing";

function serverResponse(res, msg, code) {
  res.status(code);
  res.send(msg);
  return;
}

async function createUser(req, res, next) {
  const username = req.body.username;
  try {
    const hashedPassword = await hashPassword(req.body.password);
    const user = await client.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    err.type = "input";
    next(err);
  }
}

async function signin(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = await client.user.findUnique({ where: { username } });
  if (!user) {
    return serverResponse(res, "invalid username", 401);
  }

  const isValidPassord = await comparePasswords(password, user.password);

  if (!isValidPassord) {
    return serverResponse(res, "invalid password", 401);
  }

  const token = createJWT(user);
  res.json({ token });
}

export { createUser, signin };
