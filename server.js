const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

// Routes
app.use(require("./routes/api.js"));
// !!! this below doesn't work and leads view html routes to routes/public/exercise.html how to fix??
// app.use(require("./routes/view.js"));

// Logging
app.use(logger("dev"));

// Post req middleware (adds payload to req.body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/workouts_db",
	{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,    
		useFindAndModify: false,
	}
);

app.get("/", (req, res) => {
	res.send(index.html);
});

// Routes
// GET api/workouts -- not sure if this one is right !!!!
app.get("/", (req, res) => {
	res.send(index.html);
});
// GET exercise
app.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

// GET exercise
app.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/stats.html"));
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App running on port ${PORT}!`);
});
