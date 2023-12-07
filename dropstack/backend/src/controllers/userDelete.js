const Form = require("../models/formModel")

const userDelete = async (req, res) => {
  const deleteData = await Form.updateMany({delete: true});
  res.json({message: "ok", data: deleteData})
}
module.exports = userDelete;