const express = require("express");
const app     = express();
const cors    = require("cors");
const dotenv  = require("dotenv");
dotenv.config();
const multer   = require("multer");
const databaseConnect = require("./utils/databaseConnect");
const fileModel       = require("./models/files");
const pageNotFound    = require("./middlewares/pageNotFound");
const requestLogger   = require("./middlewares/requestLogger");


const uploader = multer({
    "dest": "../res/users_files"
});


app.use(express.json);
app.use(cors);
app.use(requestLogger);


// app.get("/user", async function (req, res) {
//     const data = await userModel.find({});

//     res.status(200).send(data);
// });
// app.get("/user/:id", async function (req, res) {
//     const id = req.params.id;
//     const data = await userModel.findOne({
//         _id: id
//     });

//     res.status(200).send(data);
// });
app.post("/file", uploader.single("file"), async function (req, res) {
    // const file = req.body;

    // if (!file)
    // {
    //     res.status(400).json(`File missing`);
    //     return;
    // }

    res.status(200).json("File Uploaded Successfully");
    // console.log(file);
//?
    // try {
    //     await userModel.create({
    //         name,
    //         age
    //     });
    
    //     res.status(200).send(`User:{name:${name}, age:${age}} Added`);
    // } catch {
    //     console.log("ERROR, USER CAN'T BE ADDED !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    // }
});
// app.put("/user/:id", async function (req, res) {
//     const id = req.params.id;

//     const updatedName = req.body.name;
//     const updatedAge = parseInt(req.body.age);

//     const user = await userModel.findOne({
//         _id: id
//     });

//     if (updatedName) user.name = updatedName;
//     if (updatedAge)  user.age  = updatedAge;

//     await user.save();

//     res.status(200).send(`User:{name:${updatedName}, age:${updatedAge}} Updated`);
// });
// app.delete("/user/:id", async function (req, res) {
//     const id = req.params.id;

//     const user = await userModel.deleteOne({
//         _id: id
//     });

//     res.status(200).send(`User:{name:${user.name}, age:${user.age}} Deleted`);
// });


app.use(pageNotFound);


const PORT = 80;
const dbName = "dbName";

// TODO: move it to utils
async function start() {
    try {
        await databaseConnect(process.env.DATABASE_URL, dbName, `Connect to the DB:${dbName}`);
        
        app.listen(PORT, function () {
            console.log(`My server started at port:${PORT}`);
        });
    } catch (error) {
        // TODO: errors in red!!!!!!
        console.error(`Error, server can't start:${error}`);
    }
}


start()