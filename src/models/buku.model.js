const mongoose = require("mongoose");

const BukuSchema = mongoose.Schema({
    judul_buku: {
        type: String
    },
    pengarang_buku: {
        type: String
    },
    rilis_buku: {
        type: Date
    },
    active: {
        type: Number,
        default: 1
    },
}, {timestamps: true});

module.exports = Buku = mongoose.model("buku", BukuSchema);