import { useEffect, useState } from "react"
import { TasksService } from "../../services/tareasService"
import { Tarea } from "../../types/Tarea"
import TasksSection from "../../components/TasksSection/TasksSection"


const Home = () => {
    //Estado donde se guardarán las tareas
    const [tasks, setTasks] = useState<Tarea[]>([])

    //Con este useEffect se buscarán todas las tareas utilizando nuestro service
    useEffect(()=>{
        const fetchTasks = async ()=>{
            const _tasks = await TasksService.getTareas()
            //Agregamos las tareas que buscamos a nuestro estado
            setTasks(_tasks)
        }

        //Se ejecuta la función
        fetchTasks()
    }, [])


    return (
        <>
            {/* 
                Llamamos a los componentes TaskFunction. 
                Le enviamos como props:
                    -El título de la sección
                    -Un array de tareas que van a filtrarse de acuerdo a su estado
            */}
            <TasksSection
                title="Por hacer"
                tasks={tasks.filter((task)=> task.estado === 'PORHACER')}
            />
            <TasksSection
                title="En producción"
                tasks={tasks.filter((task)=> task.estado === 'ENPRODUCCION')}
            />
            <TasksSection
                title="Por testear"
                tasks={tasks.filter((task)=> task.estado === 'PORTESTEAR')}
            />
            <TasksSection
                title="Completada"
                tasks={tasks.filter((task)=> task.estado === 'COMPLETADA')}
            />
        </>
    )
}

export default Home