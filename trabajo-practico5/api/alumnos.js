import config from '../config.js'
import AlumnosFactoryDAO from '../model/DAO/alumnosFactory.js'

class ApiAlumnos{
    constructor(){
        this.alumnosModel = AlumnosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerAlumnos = async id =>{
        return id? await this.alumnosModel.findAlumno(id) : await this.alumnosModel.findAlumnos()
    }

    guardarAlumno = async alumno =>{
        return await this.alumnosModel.saveAlumno(alumno)
    }

    actualizarAlumno = async (alumno,id) =>{
        return await this.alumnosModel.updateAlumno(alumno,id)
    }
    
    eliminarAlumno = async id =>{
        return await this.alumnosModel.deleteAlumno(id)
    }

    calcularPromedio = async() =>{
        return await this.alumnosModel.calcularPromedio()
    }

}

export default ApiAlumnos