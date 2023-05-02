import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartState } from './Context'


function Singleproduct({ prod }) {
    const { state: { cart }, dispatch, } = CartState()
    return (
        <div>
            <Card style={{ width: '16rem' }}>
                <img src={prod.image} alt="" />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>
                        <p>{prod.desc}</p>
                        <h5>$ {prod.price}</h5>
                    </Card.Text>
                    {cart.some((p) => p.id ===prod.id) ? (
                        <Button variant="danger" onClick={() => dispatch({
                            type: "removefromcart",
                            payload: prod,
                        })}>Remove</Button>)
                        : (
                            <Button variant="success" onClick={() => dispatch({
                                type: "addtocart",
                                payload: prod
                            })} className='ms-3'
                                disabled={!prod.stock}>{!prod.stock ? "Out of stock" : "Add to cart"}</Button>)}

                </Card.Body>
            </Card>
        </div>
    )
}


export default Singleproduct