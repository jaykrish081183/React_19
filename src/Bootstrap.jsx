import { Alert, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Bootstrap = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
            <Button variant="primary" style={{ marginRight: '5px' }}>Primary</Button>
            <Button variant="secondary" style={{ marginRight: '5px' }}>Secondary</Button>
            <Button variant="success" style={{ marginRight: '5px' }}>Success</Button>
            <Button variant="danger" style={{ marginRight: '5px' }}>Danger</Button>
            <Button variant="warning" style={{ marginRight: '5px' }}>Warning</Button>
            <Button variant="info" style={{ marginRight: '5px' }}>Info</Button>
            <Button variant="light" style={{ marginRight: '5px' }}>Light</Button>
            <Button variant="dark" style={{ marginRight: '5px' }}>Dark</Button><hr />
            <Alert variant="primary">Alert Primary</Alert>
            <Alert variant="secondary">Alert Secondary</Alert>
            <Alert variant="success">Alert Success</Alert>
            <Alert variant="danger">Alert Danger</Alert>
            <Alert variant="warning">Alert Warning</Alert>
            <Alert variant="info">Alert Info</Alert>
            <Alert variant="light">Alert Light</Alert>
            <Alert variant="dark">Alert Dark</Alert>
            <hr />
        </div>
    );
}
export default Bootstrap;