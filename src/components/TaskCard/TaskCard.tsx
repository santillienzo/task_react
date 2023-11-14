import { Tarea } from "../../types/Tarea"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

interface Props {
    task: Tarea
}

const TaskCard = ({task}:Props) => {
    //Instancia de useNavigate para redirigir a otra pantalla
    const navigate = useNavigate()

    //Extraemos todos los datos que vamos a utilizar de nuestro objeto mediante destructuring
    const {id, imagen, descripcion, titulo} = task

    return (
    <Card style={{ minWidth: '300px', maxWidth: '300px'}}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
                {descripcion}
            </Card.Text>
            <Button 
                variant="dark" 
                onClick={()=> navigate('/task', {
                    //Enviamos el id mediante la propiedad state del archivo de configuración
                    state:{
                        id
                    }
                })}
            >Ver más</Button>
        </Card.Body>
    </Card>
    )
}

export default TaskCard