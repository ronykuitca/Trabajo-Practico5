import express from 'express'
import ControladorAlumnos from '../controller/alumnos.js'

export class RouterAlumnos {
    constructor(){
        this.router = express.Router()
        this.controladorAlumnos = new ControladorAlumnos()
    }

    start(){
        this.router.get('/:id?', this.controladorAlumnos.getAlumnos)

        this.router.post('/', this.controladorAlumnos.postAlumno)

        this.router.get('/calculos', this.controladorAlumnos.calcularPromedio)

        this.router.put('/:id', this.controladorAlumnos.putAlumno)

        this.router.delete('/:id', this.controladorAlumnos.deleteAlumno)

        return this.router
    }
}

