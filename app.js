const express=require("express")

const app=express()
const router=require("./rutas/categoriaRutas")
const routerP=require("./rutas/productosRutas")

app.use(express.json())

app.use("/api", router)
app.use("/api", routerP)








module.exports=app