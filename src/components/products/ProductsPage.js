import React from 'react';
import {Card, Button, Container, Row, Col} from "react-bootstrap"

function ProductsPage({title, price, image}) {
  return (
    <Card style={{margin:"1.25rem auto"}} >
    <Card.Img variant="top" src={image} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            <h4>Price: {price}</h4>
        </Card.Text>
        <Button variant="primary">Product Details</Button>
    </Card.Body>
    </Card> 
  )
}

export default ProductsPage;
