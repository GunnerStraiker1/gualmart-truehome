import React, { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Card, Button, Carousel, CarouselItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { itemProduct } from "../../redux/selectors/productsSelector";
import { getOneProduct } from "../../redux/actions/productsActions";
import "./ProductDetail.css"
import { CartContext } from "../../Context/CartContext";

const ProductDetail = () => {

    const idItem = useParams();
    const dispatch = useDispatch();
    const item = useSelector((state) => itemProduct(state))
    const [cart , setCart] = useContext(CartContext)

    const getIteminformation = () => {
        dispatch(getOneProduct(idItem))
    }

    const addToCart = () =>{
        if(cart.some(e => e.id === item.usItemId)){
            let cartCopy = [...cart]
            let foundIndex = cartCopy.findIndex(x => x.id === item.usItemId)
            cartCopy[foundIndex].quantity++;
            setCart(cartCopy)
        }
        else{
            const itemAdded = {id:item.usItemId, title: item.productAttributes.productName, imgItem: item.imageList[0].imageAssetSizeUrls.default,price: item.offerList[0].pricesInfo.prices.current.price, quantity: 1}
            setCart(actual => [...actual, itemAdded]);
        }
    }


    useEffect(() => {
        getIteminformation()
    }, [])

    return (
        <Container fluid>
            {
                item !== null ?
                    <Row style={{ margin: " 1em 0em" }}>
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <Carousel controls={false}>
                                        {
                                            item.imageList.map((image, key)=>{
                                                return(
                                                    <CarouselItem key={key}>
                                                        <img src={image.imageAssetSizeUrls.default} className="imgCarousel" alt="imageItem"/>
                                                    </CarouselItem>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Header>
                                    <h3>{item.productAttributes.productName}</h3>
                                </Card.Header>
                                <Card.Body><p>
                                    <span className="description-item">{item.productAttributes.shortDescription}</span>
                                    <br /><br />
                                    <b>Brand: </b>
                                    <span className="brand-item">{item.productAttributes.brand}</span>
                                    <br />
                                    <b>Manufacturer: </b>
                                    <span className="manufacturer-item">{item.productAttributes.manufacturerName}</span>
                                </p>

                                    <h4>Price: $ {item.offerList[0].pricesInfo.prices.current.price} USD</h4>
                                    <div className="button-group-item">
                                        <Button size="lg" onClick={addToCart}>Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    : null
            }
        </Container>
    )
}

export default ProductDetail