class AlumnosMemDAO{

    constructor(){
        this.alumnos =[
            {id:'1',nombre:'Juan', apellido:'Perez',curso:'1-A',notas: [6,7,9]},
            {id:'1',nombre:'Ana', apellido:'Gonzalez',curso:'1-A',notas: [8,6,7]}
        ]
    }

    findAlumno = async id =>{
        return this.alumnos.find(alumno => alumno.id == id)
    }

    findAlumnos = async () => {
        try{
            return this.alumnos
        }
        catch{
            return []
        }
    }

    saveAlumno = async alumno =>{
        const id = parseInt(this.alumnos[alumnos.length-1].id) +1
        alumno.id = String(id)
        this.alumnos.push(alumno)
        return alumno
    }

    updateAlumno = async (alumno, id) =>{
        alumno.id = id
        const index = this.alumnos.findIndex(alumno => alumno.id == id)
        this.alumnos.splice(index,1,alumno)
        
        return alumno
    }

    calcularPromedio = async () =>{
        let cantNotas = 0
        let cantTotal = 0
        for (let index = 0; index < this.alumnos.length; index++) {
            const alumno = alumnos[index];
            cantNotas +=alumno.notas.length
            cantTotal += alumno.notas[index]
            
        }
        return totalNotas / cantNotas
    }

    deleteAlumno = async id =>{
        const index = this.alumnos.findIndex(alumno => alumno.id == id)

        const alumno = this.alumnos.splice(index,1)[0]
        return alumno
    }


}

export default AlumnosMemDAO