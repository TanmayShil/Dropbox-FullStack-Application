const fs = require("fs").promises;
const Form = require("../models/formModel.js")

require("../db.js");

const ACCESS_TOKEN = "sl.BpYrdJ8l-GoK2fscm7PjfFTOoiY723aYhmNm7EV4rMfZRwpxrzZWGHqgCIyVBCuuoZOJq11fSN8Gir1sMsJi5yMFRWm-QzbYR6oGkZLwcdSn66vOtFeeH_nHJ_MSjrQGq4ngegO4fTVXcIY";

const test = async (req, res) => {
    //form data save database
    const { fname, lname, mobile, email, aadharNumber, panNumber, urn } = req.body;

    let folderName = `${fname}_${lname}`;

    const newForm = new Form({
        fname: fname,
        lname: lname,
        mobile: mobile,
        email: email,
        aadharNumber: aadharNumber,
        panNumber: panNumber,
        urn: urn,
        folderName: folderName,
    });
    await newForm.save();

    try {
        // const folderName = req.body.fname;
        // console.log(folderName);

        // Check if the folder already exists
        // const checkFolderResponse = await fetch('https://api.dropbox.com/2/files/get_metadata', {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Bearer ${ACCESS_TOKEN}`,
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ path: '/' + folderName }),
        // });
        // if (checkFolderResponse.status === 200) {
        //     return res.status(200).json({ message: 'Folder with the same name already exists.' });
        // }

        // Create folder in dropbox
        const createFolderResponse = await fetch('https://api.dropbox.com/2/files/create_folder_v2',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ path: '/' + folderName }),
            });
        if (createFolderResponse.status !== 200) {
            return res.status(createFolderResponse.status).json({ error: 'Failed to create folder in Dropbox.' });
        }

        //uploading in dropbox
        try {
            
            const images = req.files;
            const isFresher = req.body.fresher === 'fresher';

            const numImagesToUpload = isFresher ? 7 : 11;
            for (let i = 1; i <= numImagesToUpload; i++) {
                const imageField = 'image' + i;
                const image = images[imageField][0];
                const imageStream = await fs.readFile(image.path);
                const uploadResponse = await fetch('https://content.dropboxapi.com/2/files/upload', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`,
                        'Content-Type': 'application/octet-stream',
                        'Dropbox-API-Arg': JSON.stringify({
                            path: '/' + folderName + '/' + image.originalname + new Date().getTime(),
                        }),
                    },
                    body: imageStream,
                });
                if (uploadResponse.status !== 200) {
                    throw new Error('Error uploading image ' + i + ': ' + (await uploadResponse.json()).error_summary);
                }
                // Delete the uploaded image file
                await fs.unlink(image.path);

            }
        } catch (error) {
            return res.json({ error: error.message });
        }

        // If everything is successful, send a success response
        // return res.status(200).json({ message: 'Form submitted successfully.' });

    // Function to get the URL of a folder in Dropbox
    const folderOpen = await fetch('https://api.dropboxapi.com/2/files/get_metadata', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            path: '/' + folderName,
            include_media_info: false,
        }),
    });

        const folderdata = await folderOpen.json();
        // The shared URL of the folder can be constructed using the 'path_display' field.
        const folderPath = folderdata.path_display;
        const folderURL = `https://www.dropbox.com/home/Apps/boxesdrop/${folderPath}`;
        res.json({data5: folderURL})

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred: ' + error.message);
    }

}

module.exports = test;