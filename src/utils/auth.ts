import jwt from "jsonwebtoken";

function createJWT(user): string {
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
}

export default createJWT;
