import client from "../db";

async function getUpdates(req, res) {
  const userId = req.user.userId;
  const updates = await client.update.findMany({
    where: {
      product: {
        belongsToId: userId,
      },
    },
  });
  res.status(200).json({ data: updates });
}

async function getUpdate(req, res) {
  const updateId = req.params.id;
  const update = await client.update.findUnique({
    where: {
      id: updateId,
    },
  });
  res.status(200).json({ data: update });
}

async function createUpdate(req, res) {
  const productId = req.body.productId;
  const update = await client.update.create({
    data: {
      ...req.body,
      productId: productId,
    },
  });
  res.status(201).json({ data: update });
}

async function updateUpdate(req, res) {
  const updateId = req.params.id;
  const updatedUpdate = await client.update.update({
    where: {
      id: updateId,
    },
    data: {
      ...req.body,
    },
  });
  res.status(201).json({ data: updatedUpdate });
}

async function deleteUpdate(req, res) {
  const updateId = req.params.id;
  const deletedUpdate = await client.update.delete({
    where: {
      id: updateId,
    },
  });
  res.status(201).json({ data: deletedUpdate });
}

export { getUpdates, getUpdate, createUpdate, updateUpdate, deleteUpdate };
