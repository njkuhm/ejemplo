import {Injectable} from '@angular/core';

@Injectable()

export class Crud {
    actividades = [
        { id: 1, titulo:"Diagrama de flujos", descripcion:"Desarrollar diagramas de flujo para proyecto app kanban", prioridad:"alta", estado:"do", fechaTermino:"2017/12/04"},
        { id: 2, titulo: "Casos de uso", descripcion: "Para el dia jueves. El profe pidio revision", prioridad: "media", estado: "do", fechaTermino: "2017/12/24" },
        { id: 3, titulo: "Modelo entidad relacion", descripcion: "Sin el diagrama no podeos seguir avanzando con el proyecto", prioridad: "alta", estado: "doing", fechaTermino: "2017/11/21" }
    ];

    public getActividades(){
        return this.actividades;
    }

    public getActividad(id) {
        return this.actividades.filter(function (e, i) {
            return e.id == id
        })[0] || { id: null, titulo: null, descripcion: null, prioridad: null, estado:null, fechaTermino: null };
    }

    public createActividad(actividad) {
        this.actividades.push(actividad);
    }

    public editActividad(actividad) {
        let index = this.actividades.indexOf(actividad);
        this.actividades[index] = actividad; 
    }

    public deleteLenguaje(actividad) {
        let index = this.actividades.indexOf(actividad);
        this.actividades.splice(index,1); 
    }
}