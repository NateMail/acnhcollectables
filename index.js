const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// App DB Configuration
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB connected"));

mongoose.connection.on("error", (error) => {
  console.log(`DB connection error: ${error.message}`);
});

// App Vars
const port = process.env.PORT || "5000";
const bugRoutes = require("./routes/bug");
const fishRoutes = require("./routes/fish");
const flowerRoutes = require("./routes/flower");
const monthRoutes = require("./routes/month");
const seaRoutes = require("./routes/seaCreature");
const fossilRoutes = require("./routes/fossil");

// Middeware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
app.use("/", bugRoutes);
app.use("/", fishRoutes);
app.use("/", flowerRoutes);
app.use("/", monthRoutes);
app.use("/", seaRoutes);
app.use("/", fossilRoutes);

// Heroku Ready
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Server
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
