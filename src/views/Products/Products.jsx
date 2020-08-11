import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsResult } from '../../redux/selectors/productsSelector';
import { getProducts, initializeProduct } from '../../redux/actions/productsActions';
import { Row, Container } from 'react-bootstrap';
import CardProducts from '../../components/CardProducts/CardProducts';

const Products = () =>{

    const dispatch = useDispatch();
    dispatch(initializeProduct())
    const resProducts = useSelector((state) => productsResult(state))

    const getProductsInformation = () => {
        dispatch(getProducts())
    }

    useEffect(() =>{
        if(resProducts === undefined)
            getProductsInformation()
    },[resProducts])

    return(
        <Container fluid>
            <h4>Products</h4>
            <Row>
                {
                    resProducts ? resProducts.map((prod, key) =>{
                        return(
                            <CardProducts info={prod} idx={key} key={key} />
                        )
                    }) : null
                }
            </Row>
        </Container>
    )
}

export default Products