const express=require("express")

const router=express.Router()

const {verCategorias, verCategoria,crearCategoria,actualizarCategoria,eliminarCategoria}=require("../controladores/categoriaController")


router.get("/categorias", verCategorias)

router.get("/categorias/:id", verCategoria)

router.post("/categorias", crearCategoria)

router.put("/categorias/:id", actualizarCategoria)

router.delete("/categorias/:id", eliminarCategoria)








module.exports=router