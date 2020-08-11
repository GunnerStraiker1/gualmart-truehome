import React, { useContext } from 'react' 
import { Container, Row, Col } from 'react-bootstrap'
import { CartContext } from '../../Context/CartContext'
import ListCart from '../../components/ListCart/ListCart'

const ShoppingList = () =>{
    
    const [cart, setCart] = useContext(CartContext)

    return(
        <Container>
            <h4>Shopping List</h4>
            <Row>
                <Col sm={12}>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={4}>ITEM</Col>
                        <Col sm={2}>PRICE</Col>
                        <Col sm={1}>QUANTITY</Col>
                        <Col sm={1}> SUBTOTAL </Col>
                    </Row>
                    <ListCart cart={cart} setCart={setCart}/>
                </Col>
                
            </Row>
        </Container>
    )
}

export default ShoppingList