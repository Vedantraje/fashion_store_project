import React, { useEffect, useState } from 'react'
import { CartState } from './Context'
import ListGroup from 'react-bootstrap/ListGroup';
import { Row,Col,Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {BsTrashFill} from "react-icons/bs"
export default function Cart() {

  const {state:{cart},dispatch,}=CartState()
  const [total,setTotal]=useState()
  useEffect(()=>{
    setTotal(
      cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0)
  )
},[cart])
  return (
    <div className='container mt-5'>
    <div className='d-flex flex-row justify-content-evenly align-item-center'>
    <div>
      
{cart.map((prod)=>(
  <ListGroup>
      <ListGroup.Item>
      <Row>
        <Col md={2}>
<img src={prod.image} alt={prod.name} className='img-fluid rounded' height="80" width="80" />
        </Col>
        <Col md={3}>
          {prod.name}
        </Col>
        <Col md={2}>
          {prod.price}
        </Col>
         <Col md={3}>
         <Form.Select value={prod.qty} onChange={(e)=>
         dispatch({
          type:"changeqty",
          payload:{id:prod.id,qty:e.target.value},
         })}>
      {[...Array(prod.stock).keys()].map((x)=>
      (<option key={x+1}>{x+1}</option>))}
    </Form.Select>
        </Col>
        <Col md={2}>

        <BsTrashFill onClick={()=>dispatch({
  type:"removefromcart",
  payload:prod,
})}/>

        </Col>
      </Row></ListGroup.Item>
    </ListGroup>
      ))}
      </div>
      <div>
  <h4>Subtotal ({cart.length}) items</h4>
  <h4>Total: {total}</h4>
  <Button variant="success" disabled={cart.length===0}>Proceed to Checkout</Button>
</div>
    </div>


</div>
  )
}
