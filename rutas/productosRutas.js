const express=require("express")

const routerP=express.Router()

const {verProductos, verProducto, crearProducto, actualizarProducto, eliminarProducto}=require("../controladores/productosController")


routerP.get("/productos", verProductos)

routerP.get("/productos/:id", verProducto)

routerP.post("/productos", crearProducto)

routerP.put("/productos/:id", actualizarProducto)

routerP.delete("/productos/:id", eliminarProducto)








module.exports=routerP