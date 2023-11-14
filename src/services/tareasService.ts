import { Tarea } from "../types/Tarea"

const BASE_URL = 'http://localhost:3000'

export const TasksService = {
    getTareas: async (): Promise<Tarea[]> => {
        const response = await fetch(`${BASE_URL}/tasks`)
        const data = await response.json()

        return data
    },
    getTarea: async (id:number): Promise<Tarea> =>{
        const response = await fetch(`${BASE_URL}/tasks/${id}`);
        const data = await response.json();
        return data;
    },
    createTarea: async (product: Tarea): Promise<Tarea> => {
        const response = await fetch(`${BASE_URL}/tasks`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    },
    updateTarea: async (id: number, product: Tarea): Promise<Tarea> => {
        const response = await fetch(`${BASE_URL}/tasks/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    },
    deleteTasks: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/tasks/${id}`, {
                method: "DELETE"
        });
    }
}