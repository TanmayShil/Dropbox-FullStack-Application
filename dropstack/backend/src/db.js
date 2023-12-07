const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tanmayofficial93:IATixuVaDWS21j2V@cluster0.di8nprj.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to database succesfully");
});
// const mongooseConnect = async() => {
//     try {
//         const conn = await mongoose.connect('mongodb://127.0.0.1:27017/mydrop')
//         console.log('Connected to database succesfully')
//     } catch (error) {
//         console.log('Could not connect to database')
//     }
// }

// module.exports = mongooseConnect;