import { Alert, Container } from "react-bootstrap"
import { Tarea } from "../../types/Tarea"
import TaskCard from "../TaskCard/TaskCard"
import { useNavigate } from "react-router-dom"

interface Props {
    title?: string
    tasks: Tarea[]
}

const TasksSection = ({title = 'Título por default', tasks}: Props) => {
    //Instancia de useNavigate para redirigir a otra pantalla
    const navigate = useNavigate()

    return (
        <div>
            <h3 className="fs-1 text-center">{title}</h3>
            <div className="d-flex gap-2 flex-wrap">
                {
                    //Si tasks tiene una longitud mayor a 0 se ejecutará el map. Si no se mostrará una alerta
                    tasks.length > 0 ?
                        tasks.map((task, i)=> (
                                <TaskCard key={i} task={task}/>
                        ))
                    : (
                        <Container>
                            <Alert variant={'light'}>
                                No hay tareas para esta sección.{' '}
                                <Alert.Link onClick={()=> navigate('add-task')}>Agrega mas tareas aquí</Alert.Link>.
                            </Alert>
                        </Container>
                    )
                }
            </div>
        </div>
    )
}

export default TasksSection