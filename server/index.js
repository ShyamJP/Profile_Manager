const express = require("express");
const cors = require("cors");
const db = require("./model/db");
const app = express();
const User = require("./model/model");
const PORT = process.env.PORT;
const bp = require("body-parser");
const status = require("statuses");
const multer = require("multer");

app.use(bp.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//multer for save file in DB
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Get image url
let imgname;
app.post("/upload", upload.single("file"), async (req, res) => {
  await console.log(req.body);
  imgname = req.file.filename;
  console.log("image url recieved : " , imgname );
  if(imgname != null){
    res.json('image Uploaded success fully')
  } 
  else{
    res.json('image is not Uploaded')
  } 
});

app.post("/send", async (req, res) => {
  const user = new User({
    name: req.body.name,
    Email: req.body.Email,
    Password: req.body.Password,
    image: imgname,
    Linkedin: req.body.Linkedin,
    Github: req.body.Github,
    insta: req.body.insta,
  });
  try {
    await user
      .save()
      .then((res) => console.log("data recieved"))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
});

app.get("/getdata", async (req, res) => {
  await User.find({})
    .then((data) => res.send({ status: "ok", data: data }))
    .catch((err) => console.log(err));
});

app.post("/login", async (req, res) => {
  const { Email, Password } = req.body;
  const getuser = await User.findOne({ Email: Email });
  if (getuser) {
    if (getuser.Password === Password) {
      res.json({ message: "user Loged in", data: getuser });
    } else {
      res.json({ message: "User not Exist" }).status(404);
    }
  }
  // .then((result)=> res.json({message:"user Loged in", data: result }))   // console.log("User Loged in")
  // .catch(err => res.json(err))   //console.log(err)
});

app.get("/profile/:id", async (req, res) => {
  const id = req.params.id;
  await User.findById({ _id: id })
    .then((result) => {
      res.json({ data: result, message: "Profile Data recieved" });
      console.log("Profile Data recieved");
    })
    .catch((err) => console.log(err));
});


// update data
let updatedimg;
app.put("/upload", upload.single("file"), async (req, res) => {
  await console.log(req.body);
  console.log("image url recieved");
  updatedimg = req.file.filename;
});
app.put("/profile/:id", async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      Email: req.body.Email,
      Password: req.body.Password,
      image: updatedimg,
      Linkedin: req.body.Linkedin,
      Github: req.body.Github,
      insta: req.body.insta,
    }
  )
    .then((result) => res.json({ message: "User Data Updated", data: result }))
    .catch((err) => {
      res.json({ message: "User Not Found" });
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3001");
});
