const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const userRouter=require('./routes/user')

const pageRoutes = require("./routes/pageroutes");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pageRoutes);
app.use('/user',userRouter)
module.exports = app;
