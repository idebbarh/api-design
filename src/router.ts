import { Router } from "express";
import { createUser, signin } from "./handlers/user";

const router = Router();

/* product routes */
router.get("/product", (req, res) => {
  res.json({ msg: "hello", name: req.theName });
});
router.get("/product/:id", (req, res) => {});
router.post("/product", (req, res) => {});
router.put("/product/:id", (req, res) => {});
router.delete("/product/:id", (req, res) => {});

/* update routes */
router.get("/update", (req, res) => {});
router.get("/update/:id", (req, res) => {});
router.post("/update", (req, res) => {});
router.put("/update/:id", (req, res) => {});
router.delete("/update/:id", (req, res) => {});

/* updatepoint routes */
router.get("/updatepoint", (req, res) => {});
router.get("/updatepoint/:id", (req, res) => {});
router.post("/updatepoint", (req, res) => {});
router.put("/updatepoint/:id", (req, res) => {});
router.delete("/updatepoint/:id", (req, res) => {});
/* user */

router.get("/userData", (req, res) => {
  res.json(req.user);
});
router.post("/signup", createUser);
router.post("/login", signin);

export default router;
