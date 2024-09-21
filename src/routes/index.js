import { Router } from "express"
import { guardarPelicula, TraerPeliculas } from "../services/conexion.mjs"

const router= Router()

router.get('/',(req,res)=> res.render('index',{title: 'Mi primera web en Node' } ))

router.get('/about',(req,res)=> res.render('about',{title: 'Sobre Nosotros' }))

router.get('/contact',(req,res)=> res.render('contact',{title: 'Contáctanos' }))

router.get('/api/get-peliculas', async(req,res)=>{
    const peliculas= await TraerPeliculas()
    res.status(200).json(peliculas)

})
router.post('/api/set-peliculas',async(req,res)=>{
    const pelicula= req.body
    const response= guardarPelicula(pelicula)
    if(response){
        res.status(200).json({message:'Se guardó la película'})
    }else{
        res.status(500).json({message:'ERROR!!!!!!!'})
    }
})
export default router