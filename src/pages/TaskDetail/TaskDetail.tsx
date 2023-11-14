import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { TasksService } from '../../services/tareasService';
import { Tarea } from '../../types/Tarea';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';

const TaskDetail = () => {
    //Aquí se guardará nuestra tarea
    const [task, setTask] = useState<Tarea>()
    //Extraemos state de useLocation
    const {state} = useLocation();
    //Extraemos el id de state
    const {id} = state

    
    useEffect(()=>{
        //Buscamos la tarea en nuestra base de datos
        const fetchTask = async ()=>{
            const _task = await TasksService.getTarea(id)
            if (_task.id) {
                setTask(_task)
            }
        }

        //Ejecutamos la función
        fetchTask()
    }, [id])
    return task ? (
        <Container>
            <Row>
                <Col xs={4}>
                    <Image src={task.imagen}/>
                </Col>
                <Col xs={8}>
                    <h3 className='fs-1'>{task.titulo}</h3>
                    <p className='lead'>{task.descripcion}</p>
                    <p>Tiempo: {task.tiempo}</p>
                    <div className='d-flex gap-2'>
                        <Form.Select
                            size='sm'
                            name="estado"
                            value={task.estado}
                            onChange={()=> console.log('')}
                        >
                            <option value={'PORHACER'}>Por hacer</option>
                            <option value={'ENPRODUCCION'}>En producción</option>
                            <option value={'PORTESTEAR'}>Por testear</option>
                            <option value={'COMPLETADA'}>Completada</option>
                        </Form.Select>
                        <Button>Cambiar</Button>
                        <Button variant='outline-danger'><i className="bi bi-trash"></i></Button>
                        <Button variant='danger'>Salir</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    ): (<p>Cargando...</p>)
}

export default TaskDetail