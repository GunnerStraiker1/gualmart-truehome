import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const ListCart = (props) => {

    const removeFromCart = (e) =>{
        e.preventDefault();
        let cartCopy = [...props.cart]
        const pos = e.currentTarget.id
        if(cartCopy[pos].quantity > 1){
            cartCopy[pos].quantity--
        }
        else{
            cartCopy.splice(pos, 1)
            if(cartCopy.length === 0){
                localStorage.setItem('cart', [])
            }
        }
        props.setCart(cartCopy)
        
    }

    let total = 0
    return(
        <div>
            {
                props.cart.map((item, key) =>{

                    total += item.price * item.quantity
                    return(
                        <Row key={key}>
                            <Col sm={2}>
                            {/* {item.id} */}
                            <img src={item.imgItem} alt="" width="100%" height="100%" />
                            </Col>
                            <Col sm={4}>
                                <p>{item.title}</p>
                            </Col>
                            <Col sm={2}>
                               <p>$ {item.price} USD</p>
                            </Col>
                            <Col sm={1}>
                                <p>{item.quantity}</p>
                            </Col>
                            <Col sm={1}>
                                <p>$ {item.price * item.quantity}</p>
                            </Col>
                            <Col sm={1}>
                                <Button size="sm" variant="danger" id={key} onClick={removeFromCart}> - </Button>
                            </Col>
                        </Row>
                    )
                })
            }
            <Row>
                <Col md={{span:3, offset: 9}}>
                    <h4>Total: $ {total} USD</h4> 
                </Col>
            </Row>
        </div>
    )
}

export default ListCart