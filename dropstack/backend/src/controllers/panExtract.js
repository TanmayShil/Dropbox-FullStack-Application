const tesseract = require('tesseract.js');

const panExtract = async (req, res) => {
    const image2 = req.file;
    tesseract
        .recognize(image2.path, "eng", { logger: (m) => console.log(m) })
        .then(({ data: { text } }) => {
            // console.log(text); 
            const panNumberPattern = /[A-Z]{5}[0-9]{4}[A-Z]/;
            const matches = text.match(panNumberPattern);
            // console.log(matches);

            // const fathername = /^.*$/gm;
            // const fatherNameMatch = text.match(fathername);
            // console.log(fatherNameMatch);
            // const fatherNamePattern = /Father['’]?s\s*Name\s*:?\s*([\w\s]+)/i;
            // const dobPattern = /Date\s*of\s*Birth\s*:?\s*([\d/:-]+)/i;

            // const fatherNameMatch = text.match(fatherNamePattern);
            // console.log(fatherNameMatch);
            // const dobMatch = text.match(dobPattern);

            // const extractedInfo = {
            //     fatherName: fatherNameMatch ? fatherNameMatch[1].trim() : 'Father\'s Name not found',
            //     dateOfBirth: dobMatch ? dobMatch[1].trim() : 'Date of Birth not found',
            //   };
            //   console.log('Extracted Father\'s Name:', extractedInfo.fatherName);
            //   console.log('Extracted Date of Birth:', extractedInfo.dateOfBirth);

            res.json({ message: 'success', data: matches[0] })
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = panExtract;