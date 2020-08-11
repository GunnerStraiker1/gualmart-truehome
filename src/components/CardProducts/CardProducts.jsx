import React from 'react'
import { Col, Card } from 'react-bootstrap'
import "./CardProducts.css"
import { Link } from 'react-router-dom'

const CardProducts = (props) => {

    return (
        <Col sm={3} key={props.idx}>
            <Card className="cardProduct">
                <Card.Body>
                    <img src={props.info.imageUrl} className="imageCard" />
                    <div className="titleContainer">
                        <h6>{props.info.title}</h6>
                    </div>
                    <p>{props.info.department}</p>
                    <Link className="buttonSee" to={"/product/detail/" + props.info.usItemId}>See details</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardProducts