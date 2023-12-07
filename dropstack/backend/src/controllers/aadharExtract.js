const tesseract = require('tesseract.js');
const fs = require("fs").promises;

const aadharExtract = async (req, res) => {
  const image1 = req.file;
  tesseract
    .recognize(image1.path, "eng", { logger: (m) => console.log(m) })
    .then(({ data: { text } }) => {
      // console.log(text)
      const aadharNumberPattern = /\d{12}/g;
      const matches = text.match(aadharNumberPattern);
      // console.log(matches);
      let removeComma = matches.join('');
      // console.log('data:', removeComma);
      res.json({ message: 'success', data: removeComma })
    })
    .catch((error) => {
      console.log(error);
    })
  // // Delete the uploaded image file
  // await fs.unlink(image1.path);
}

module.exports = aadharExtract;