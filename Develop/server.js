const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

// Logging
app.use(logger("dev"));

// Post req middleware (adds payload to req.body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];
const db = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", {
    useNewUrlParser: true,
    useFindAndModify: false }
);

app.get("/", (req, res) => {
    res.send(index.html);
});

// Routes
// GET api/workouts
app.get("/", (req, res) => {
    res.send(index.html);
});
// GET exercise
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/exercise.html"));
});

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
