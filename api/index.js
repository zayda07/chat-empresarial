const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
//const postRoute = require("./routes/posts");
/** ruta de conversations*/
const conversationRoute = require("./routes/conversations");
/** ruta de messages*/
const messageRoute = require("./routes/messages");
const router = express.Router();
const path = require("path");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB");
    }
);
//app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
//app.use("/api/posts", postRoute);
/**middleware conversations una vez exista esta url:/api/conversations va a tomar lo que se encuentre en la ruta conversationRoute (conversations.js) */
app.use("/api/conversations", conversationRoute);
/**middleware conversations una vez exista esta url:/api/messages va a tomar lo que se encuentre en la ruta messageRoute (messages.js) */
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
});
