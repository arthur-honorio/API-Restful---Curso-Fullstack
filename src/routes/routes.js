const router = require("express").Router()
const ProductsController = require("../controllers/products")

router.get("/products/:id?", ProductsController.get)
router.post("/products", ProductsController.post)
// router.put("/clientes/:id", ProductsController.put)
// router.delete("/clientes/:id", ProductsController.delete)

module.exports = router