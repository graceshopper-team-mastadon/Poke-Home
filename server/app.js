const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const Axios = require("axios");
const path = require("path");
const app = express();
const loginRouter = require("./cookieRoutes/login");

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "..", "/public")));

app.use("/api", require("./api/index"));
app.use("/auth", require("./authRoutes"));
app.use("/api/dashboard", require("./api/adminRoutes"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});
// app.get("/login", loginRouter);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

module.exports = app;
