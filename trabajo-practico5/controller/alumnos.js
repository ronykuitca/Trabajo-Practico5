import ApiAlumnos from "../api/alumnos.js";

class ControladorAlumnos{
    constructor() {
        this.apiAlumnos = new ApiAlumnos()
    }

    getAlumnos = async (req,res) => {
        const { id } = req.params
        res.json( await this.apiAlumnos.obtenerAlumnos(id) )
    }

    postAlumno = async (req,res) => {
        const alumno = req.body
        res.json(await this.apiAlumnos.guardarAlumno(alumno))
        //res.redirect('/')
    }

    putAlumno = async (req,res) => {
        const { id } = req.params
        const alumno = req.body
    
        res.json(await this.apiAlumnos.actualizarAlumno(alumno,id))
    }

    calcularPromedio = async (req,res) =>{
        res.json(await this.apiAlumnos.calcularPromedio())
    }

    deleteAlumno = async (req,res) => {
        const { id } = req.params
    
        res.json(await this.apiAlumnos.eliminarAlumno(id))
    }
}

export default ControladorAlumnos