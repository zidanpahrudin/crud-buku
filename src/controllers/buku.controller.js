//  models
const BukuModel = require("../models/buku.model");

module.exports = {
    create: async (req, res) => {
        try {
            const {
                judul_buku,
                pengarang_buku,
                rilis_buku,
            } = req.body;
            const buku_obj = {};
            if(judul_buku) buku_obj.judul_buku = judul_buku;
            if(pengarang_buku) buku_obj.pengarang_buku = pengarang_buku;
            if(rilis_buku) buku_obj.rilis_buku =  Date(rilis_buku);

            const new_buku = BukuModel(buku_obj);
            await new_buku.save();
            
            return res.json({
                status: "success",
                message: "buku berhasil di buat",
                data: []
            })


        } catch(err) {
            return res.status(500).json({
                status: "failed",
                message: "server error, cause" + err.message,
                data: []
            })
        }
    },
    fetch: async (req, res) => {
        try {
            const buku_id = req.params.id;
            const buku_filter = {};
            buku_filter.active = 1;
            if (buku_id) buku_filter._id = buku_id;
            const buku = await BukuModel.find(buku_filter).lean();
            if(buku.length <= 0) {
                return res.json({
                    status: "failed",
                    mesage: "buku tidak di temukan",
                    data: []
                })
            }

            return res.json({
                status: "success",
                message: "buku di temukan",
                data: buku
            })
        } catch(err) {
            return res.status(500).json({
                status: "failed",
                message: "server error, cause" + err.message,
                data: []
            })
        }
    },
    update: async (req, res) => {
        try {
            const {
                judul_buku,
                pengarang_buku,
                rilis_buku,
            } = req.body;
            const buku_id = req.params.id;
            const buku_obj = {};
            if(judul_buku) buku_obj.judul_buku = judul_buku;
            if(pengarang_buku) buku_obj.pengarang_buku = pengarang_buku;
            if(rilis_buku) buku_obj.rilis_buku =  Date(rilis_buku);
            
            const buku_filter = {};
            buku_filter.active = 1;
            if (buku_id) buku_filter._id = buku_id;
            const buku = await BukuModel.find(buku_filter).lean();
            if(buku.length <= 0) {
                return res.json({
                    status: "failed",
                    mesage: "buku tidak di temukan",
                    data: []
                })
            }

            await BukuModel.findOneAndUpdate(buku_filter, buku_obj);
            return res.json({
                status: "success",
                message: "buku berhasil di update",
                data: []
            });
        } catch(err) {
            return res.status(500).json({
                status: "failed",
                message: "server error, cause" + err.message,
                data: []
            })
        }
    },
    delete: async (req, res) => {
        try {
            const buku_filter = {};
            const buku_id = req.params.id;
            buku_filter.active = 1;
            if (buku_id) buku_filter._id = buku_id;
            const buku = await BukuModel.find(buku_filter).lean();
            if(buku.length <= 0) {
                return res.json({
                    status: "failed",
                    mesage: "buku tidak di temukan",
                    data: []
                })
            }

            await BukuModel.findOneAndDelete(buku_filter);
            return res.json({
                status: "success",
                message: "buku berhasil di delete",
                data: []
            });
        } catch(err) {
            return res.status(500).json({
                status: "failed",
                message: "server error, cause" + err.message,
                data: []
            })
        }
    },
}