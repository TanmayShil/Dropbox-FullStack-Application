const express = require("express");
const router = require("./routes/databaseUpload");
const cors = require("cors")


const app = express();
const port = 8000;

//database connection
require("./db.js");

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use('/api/v1/', router)

app.listen(port, (err) => {
    console.log(`Server is running on port ${port}`);
});