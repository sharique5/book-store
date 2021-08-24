const express = require("express");
const connectDB = require("./config/db");
const bookRouter = require("./routes/api/books");
const app = express();

connectDB();

app.use("/api/books", bookRouter);
app.get("/", (req, res) => res.send("Hello from home"));

const port = process.env.PORT || 8000

app.listen(port, () => console.log("server listening at port: ", port))