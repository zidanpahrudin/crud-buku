const router = require("express").Router();
const bukuController = require("../../controllers/buku.controller");

/**
 * route api/fetch/buku
 * method GET
 * access public
 */
router.get("/fetch/buku", bukuController.fetch);

/**
 * route api/fetch/buku/:id
 * method GET
 * access public
 */
router.get("/fetch/buku/:id",  bukuController.fetch);

/**
 * route api/create/buku
 * method POST
 * access public
 */
router.post("/create/buku", bukuController.create);

/**
 * route api/update/buku/:id
 * method PUT
 * access public
 */
router.put("/update/buku/:id", bukuController.update);

/**
 * route api/remove/buku/:id
 * method delete
 * access public
 */
router.delete("/remove/buku/:id", bukuController.delete);


module.exports = router;