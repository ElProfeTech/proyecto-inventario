const express=require("express")

const routerP=express.Router()

const {verProductos, verProducto, crearProducto}=require("../controladores/productosController")


routerP.get("/productos", verProductos)

routerP.get("/productos/:id", verProducto)

routerP.post("/productos", crearProducto)








module.exports=routerP