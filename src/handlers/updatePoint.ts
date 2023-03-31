import client from "../db";

async function getUpdatePoints(req, res) {
  const updateId = req.body.updateId;
  const updatePoints = await client.updatePoint.findMany({
    where: {
      updateId: updateId,
    },
  });
  res.status(200).json({ data: updatePoints });
}
async function getUpdatePoint(req, res) {
  const updatePointId = req.params.id;
  const updatePoint = client.updatePoint.findUnique({
    where: {
      id: updatePointId,
    },
  });

  res.status(200).json({ data: updatePoint });
}

async function createUpdatePoint(req, res) {
  const updateId = req.body.updateId;
  const updatePoint = await client.updatePoint.create({
    data: {
      ...req.body,
      updateId: updateId,
    },
  });
  res.status(201).json({ data: updatePoint });
}
async function updateUpdatePoint(req, res) {
  const updatePointId = req.params.id;
  const updatedUpdatePoint = await client.updatePoint.update({
    where: {
      id: updatePointId,
    },
    data: {
      ...req.body,
    },
  });
  res.status(201).json({ data: updatedUpdatePoint });
}
async function deleteUpdatePoint(req, res) {
  const updatePointId = req.params.id;
  const deletedUpdatePoint = await client.updatePoint.delete({
    where: {
      id: updatePointId,
    },
  });
  res.status(201).json({ data: deletedUpdatePoint });
}

export {
  getUpdatePoints,
  getUpdatePoint,
  createUpdatePoint,
  updateUpdatePoint,
  deleteUpdatePoint,
};
