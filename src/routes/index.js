const router = require("express").Router();

router.use("/", require("./route/buku"));

module.exports = router;