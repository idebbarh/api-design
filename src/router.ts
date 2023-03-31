import { Router } from "express";
import { body } from "express-validator";
import handleErrors from "./utils/middleware";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./handlers/product";

const router = Router();

/* product routes */

router.get("/product", getProducts);
router.get("/product/:id", getProduct);
router.post(
  "/product",
  [body("name").isLength({ min: 1 }), handleErrors],
  createProduct
);
router.put(
  "/product/:id",
  [body("name").isLength({ min: 1 }), handleErrors],
  updateProduct
);
router.delete("/product/:id", deleteProduct);

/* update routes */
router.get("/update", (req, res) => {});
router.get("/update/:id", (req, res) => {});
router.post(
  "/update",
  [
    body("title").isLength({ min: 1 }),
    body("body").isLength({ min: 1 }),
    body("status").isIn(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"]),
    body("version").optional().isInt({ min: 1 }),
    body("asset").isLength({ min: 1 }),
    body("productId").isLength({ min: 1 }),
    handleErrors,
  ],
  (req, res) => {}
);
router.put(
  "/update/:id",
  [
    body("title").isLength({ min: 1 }),
    body("body").isLength({ min: 1 }),
    body("status").isIn(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"]),
    body("version").isInt({ min: 1 }),
    body("asset").isLength({ min: 1 }),
    handleErrors,
  ],
  (req, res) => {}
);
router.delete("/update/:id", (req, res) => {});

/* updatepoint routes */
router.get(
  "/updatepoint",
  body("updateId").exists().isString(),
  handleErrors,
  (req, res) => {}
);
router.get("/updatepoint/:id", (req, res) => {});
router.post(
  "/updatepoint",
  [
    body("name").isLength({ min: 1 }),
    body("body").isLength({ min: 1 }),
    body("description").isLength({ min: 1 }),
    handleErrors,
  ],
  (req, res) => {}
);
router.put(
  "/updatepoint/:id",
  [
    body("name").isLength({ min: 1 }),
    body("body").isLength({ min: 1 }),
    body("description").isLength({ min: 1 }),
    handleErrors,
  ],
  (req, res) => {}
);
router.delete("/updatepoint/:id", (req, res) => {});

export default router;
