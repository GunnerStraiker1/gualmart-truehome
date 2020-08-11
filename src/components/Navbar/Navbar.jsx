import React, { useContext } from 'react'
import { Navbar, NavbarBrand, Nav, NavLink, Popover, OverlayTrigger, Button, Row, Col, Container } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { ShoppingCart } from 'react-feather'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'


const CustomNavbar = (props) => {

    const [cart, setCart] = useContext(CartContext)

    const popover = (
        <Popover style={{maxWidth:"400px"}}>
            <Popover.Title style={{textAlign:"center"}}>
                <h5>Shopping Card</h5>
            </Popover.Title>
            <Popover.Content style={{textAlign:"center"}}>
                <Container fluid>
                    {cart.map((item, key) => {
                        return (
                            <Row style={{textAlign:"left", marginBottom:"0.5em"}}>
                                <Col sm={8}>{item.title}</Col>
                                <Col sm={3}>$ {item.price}</Col>
                                <Col sm={1}>{item.quantity}</Col>
                            </Row>
                        )
                    })}

                    <Link to="/shoppingList">See Cart List</Link>
                    {/* <a href="#"><p>See Cart List</p></a> */}
                </Container>
            </Popover.Content>
        </Popover>)

    return (
        <Navbar collapseOnSelect >
            <NavbarBrand><Link to="/">Gualmart</Link></NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose={true} >
                        <Button><ShoppingCart /> {cart.length}</Button>
                    </OverlayTrigger>
                </Nav>
            </NavbarCollapse>

        </Navbar>
    )
}

export default CustomNavbar