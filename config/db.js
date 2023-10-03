const mongoose = require("mongoose");

const dbCOnnection = async () => {
    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/db_book");

        // 0: disconnected
        // 1: connected
        // 2: connecting
        // 3: disconnecting
    } catch (err) {
        console.log("error connect to mongodb server, cause " + err.message);
    }
}

module.exports = dbCOnnection;