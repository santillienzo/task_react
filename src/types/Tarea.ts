type Estados = 'PORHACER' | 'PORTESTEAR' | 'ENPRODUCCION' | 'COMPLETADA'

export interface Tarea {
    id?: number;
    titulo: string;
    descripcion: string;
    tiempo: number;
    imagen: string;
    responsable: string;
    estado: Estados
}