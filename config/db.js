const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to database");
    } catch(err) {
        console.log("err connecting to database: ", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;