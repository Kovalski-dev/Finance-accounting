const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const apiRoutes = require("./backend/modules/routes/routes");

app.use(cors());
app.use(express.json());
app.use("/", apiRoutes);

const url =
  "mongodb+srv://nkovalexceed:Th2UK3ntC@cluster0.1pxcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.connection.on("open", function (err, doc) {
  console.log("MongoDB connected");
});

app.listen(7000, () => {
  console.log("Starting on 7000...");
});
