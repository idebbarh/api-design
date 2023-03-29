import client from "../db";

async function getProducts(req, res) {
  const userId = req.user.userId;
  const user = await client.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      products: true,
    },
  });

  res.status(200);
  res.json({ data: user.products });
}

async function getProduct(req, res) {
  const userId = req.user.userId;
  const productId = req.params.id;
  const product = await client.product.findFirst({
    where: {
      id: productId,
      belongsToId: userId,
    },
  });

  res.status(200);
  res.json({ data: product });
}

async function createProduct(req, res) {
  const userId = req.user.userId;
  const { name } = req.body;
  const product = await client.product.create({
    data: {
      name,
      belongsToId: userId,
    },
  });
  res.status(201);
  res.json({ data: product });
}

async function updateProduct(req, res) {
  const userId = req.user.userId;
  const productId = req.params.id;
  const { name } = req.body;
  const product = await client.product.update({
    where: {
      id_belongsToId: {
        id: productId,
        belongsToId: userId,
      },
    },
    data: {
      name,
    },
  });

  res.status(201);
  res.json({ data: product });
}

async function deleteProduct(req, res) {
  const userId = req.user.userId;
  const productId = req.params.id;
  const product = await client.product.delete({
    where: {
      id_belongsToId: {
        id: productId,
        belongsToId: userId,
      },
    },
    include: {
      belongsTo: {
        select: {
          id: true,
        },
      },
    },
  });

  res.status(201);
  res.json({ data: product });
}
export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
