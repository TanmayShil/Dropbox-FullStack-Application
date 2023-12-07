const express = require('express')
const multer = require("multer");
const test = require('../controllers/text')
const aadharExtract = require('../controllers/aadharExtract')
const panExtract = require('../controllers/panExtract')
const userInfo = require('../controllers/userInfo')
const userDelete = require('../controllers/userDelete')
const router = express.Router()

const upload = multer({ dest: 'uploads/' });

router.post('/data',
// upload.any(),
 upload.fields([
    { name: 'image1', maxCount: 1 }, 
    { name: 'image2', maxCount: 1 }, 
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
    { name: 'image5', maxCount: 1 },
    { name: 'image6', maxCount: 1 },
    { name: 'image7', maxCount: 1 },
    { name: 'image8', maxCount: 1 },
    { name: 'image9', maxCount: 1 },
    { name: 'image10', maxCount: 1 },
    { name: 'image11', maxCount: 1 },
    { name: 'image12', maxCount: 1 },
    { name: 'image13', maxCount: 1 }
]),
     test);
     
router.post('/extractAadhar',
 upload.single('image1'), aadharExtract);

router.post('/extractPan', 
 upload.single('image2'), panExtract);

 router.get('/userinfo', userInfo);
 
 router.delete('/userdelete', userDelete);
module.exports = router