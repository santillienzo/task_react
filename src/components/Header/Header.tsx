import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigator = useNavigate()

    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand onClick={()=> navigator('/')}>Tareas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={()=> navigator('/')}><i className="bi bi-card-list"></i> Mis tareas</Nav.Link>
                    <Nav.Link onClick={()=> navigator('/add-task')}><i className="bi bi-plus"></i> Agregar tareas</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header