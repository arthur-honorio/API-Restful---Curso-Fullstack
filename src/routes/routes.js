const router = require("express").Router()
const ProductsController = require("../controllers/products")

router.get("/products", ProductsController.get)
// router.post("/clientes", ProductsController.post)
// router.put("/clientes/:id", ProductsController.put)
// router.delete("/clientes/:id", ProductsController.delete)

module.exports = router