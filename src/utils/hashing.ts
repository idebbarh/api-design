import bcrypt from "bcrypt";

async function comparePasswords(password, hashedPassword) {
  const res = await bcrypt.compare(password, hashedPassword);
  return res;
}

async function hashPassword(password) {
  const res = await bcrypt.hash(password, 5);
  return res;
}

export { comparePasswords, hashPassword };
