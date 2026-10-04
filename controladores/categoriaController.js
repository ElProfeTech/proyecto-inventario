const pool=require("../database/bd")


const verCategorias=async (req,res)=>{

    const [resultado]= await pool.query(
        "select * from categorias"
    )

    try {
            if(resultado==0){
return res.status(404).json({
    mensaje: "No existen registros para mostrar"
})
    }
return res.status(200).json({
    mensaje: "Listado de categorias de productos",
    categorias: resultado
})
        
    } catch (error) {
       console.error("Error interno del servidor ", error) 
    }


}

const verCategoria=async (req,res)=>{
    const idCategoria=parseInt(req.params.id)

    const [resultado]= await pool.query(
        "select * from categorias where id=?",
        [idCategoria]
    )

    try {
            if(resultado==0){
return res.status(404).json({
    mensaje: "No existe una categoria con ese id"
})
    }
return res.status(200).json({
    mensaje: "Categoria encontrada",
    categoria: resultado[0]
})
        
    } catch (error) {
       console.error("Error interno del servidor ", error) 
    }

}

const crearCategoria=async (req,res)=>{
   const {nombre}=req.body

    try {

if(!nombre){
return res.status(404).json({
    mensaje: "Es obligatorio escribir el nombre de la categoria"
})
}

 const [resultado]= await pool.query(
"insert into categorias(nombre) values(?)",
 [nombre]
    )

 if(resultado.affectedRows==0){
return res.status(404).json({
    mensaje: "No se agregaron categorias"
})
    }
return res.status(200).json({
    mensaje: "Categoria creada",
    categoria: resultado.insertId
})
        
    } catch (error) {
       console.error("Error interno del servidor ", error) 
    }
}


const actualizarCategoria=async (req,res)=>{
   const idCategoria=parseInt(req.params.id)
   const {nombre}=req.body

    try {

if(!nombre){
return res.status(404).json({
    mensaje: "Es obligatorio escribir el nombre de la categoria"
})
}

 const [resultado]= await pool.query(
"update categorias set nombre=? where id=?",
 [nombre, idCategoria]
    )

 if(resultado.affectedRows==0){
return res.status(404).json({
    mensaje: "No se actualizaron categorias"
})
    }
return res.status(200).json({
    mensaje: "Categoria actualizada",
    categoria: resultado.affectedRows
})
        
    } catch (error) {
       console.error("Error interno del servidor ", error) 
    }
}

const eliminarCategoria=async (req,res)=>{
   const idCategoria=parseInt(req.params.id)
   

    try {

 const [resultado]= await pool.query(
"delete from categorias where id=?",
 [idCategoria]
    )

 if(resultado.affectedRows==0){
return res.status(404).json({
    mensaje: "No se elimino ninguna categoria"
})
    }
return res.status(200).json({
    mensaje: "Categoria eliminada",
    categoria: resultado.affectedRows
})
        
    } catch (error) {
       console.error("Error interno del servidor ", error) 
    }
}





module.exports={

    verCategorias,
    verCategoria,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
}