const Form = require("../models/formModel")

const userInfo = async (req, res) => {
  const userData = await Form.find();
  res.json({message: "ok", data: userData})

  // await form.find()
  // .then(Form => res.json(Form))
  // .catch(error => res.json(error))
}
module.exports = userInfo;