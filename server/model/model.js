const mongoose  = require("mongoose");
const env = require('dotenv').config()

mongoose.connect(process.env.DB_URL)
.then(res => {console.log("Database Connected Successfuly")})
.catch(err => {console.log(err)})
const schema = mongoose.Schema({
    "name":{
        type:String,
        // required:true,
    },
    "Email":{
        type:String,
        required:true,
        // unique:true
    },
    "Password":{
        type:String,
        // required:true,
    },
    "image":String,
    "Linkedin":String,
    "Github":String,
    "insta":String
});

module.exports = mongoose.model("user",schema);
