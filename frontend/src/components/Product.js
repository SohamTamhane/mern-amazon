import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (
        <Card>
            <Link to={`/product/${product.slug}`}>
                <img className='card-img-top' src={product.image} alt={product.name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title><strong>{product.name}</strong></Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews}/>
                <Card.Text>${product.price}</Card.Text>
                <Button>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}
