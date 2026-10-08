const pool=require("../database/bd")



const verProductos=async (req,res)=>{

    const [resultado]= await pool.query(
        "select * from productos"
    )

    try {
            if(resultado==0){
return res.status(404).json({
    mensaje: "No existen registros para mostrar"
})
    }
return res.status(200).json({
    mensaje: "Listado de productos",
    producto: resultado
})
        
    } catch (error) {
       console.error("Error interno del servidor ", error) 
    }


}

const verProducto=async (req,res)=>{
    const idProducto=parseInt(req.params.id)

    const [resultado]= await pool.query(
        "select * from productos where id=?",
        [idProducto]
    )

    try {
            if(resultado==0){
return res.status(404).json({
    mensaje: "No existe un producto con ese id"
})
    }
return res.status(200).json({
    mensaje: "Producto encontrado",
    producto: resultado[0]
})
        
    } catch (error) {
       console.error("Error interno del servidor ", error) 
    }

}

const crearProducto=async (req,res)=>{
   const {nombre, descripcion, precio, stock, categoria_id}=req.body

    try {

if(!nombre || !descripcion || !precio || !stock || !categoria_id){
return res.status(404).json({
    mensaje: "Es obligatorio llenar todos los campos"
})
}
 

const [resultadoCategoria]= await pool.query(
        "select id from categorias where id=?",
        [categoria_id]
    )

if(resultadoCategoria ==categoria_id){
return res.status(404).json({
    mensaje: "Debe crear el producto con una categoria existente",
    resultado: resultadoCategoria
})
}

 const [resultado]= await pool.query(
"insert into productos(nombre, descripcion, precio, stock, categoria_id) values(?, ?, ?,?,?)",
 [nombre, descripcion, precio,stock, categoria_id]
    )

 if(resultado.affectedRows==0){
return res.status(404).json({
    mensaje: "No se agregaron productos"
})
    }
return res.status(200).json({
    mensaje: "Categoria creada",
    producto: resultado.insertId
})
        
    } catch (error) {
       console.error("Error interno del servidor ", error) 
    }
}






module.exports={
verProductos,
verProducto,
crearProducto

}
