import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { CartState } from './Context';
import { BsFillCartCheckFill } from "react-icons/bs";
import {BsFillTrashFill} from "react-icons/bs"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export default function Header() {
  const {state:{cart},dispatch,productDispatch}=CartState()
  return (
    <div className='container-flid'>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Online Shopping</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="m-auto"
              aria-label="Search"
              style={{width:"400px"}}
              onChange={(e)=>productDispatch({
        type:"filterbysearch",
        payload:e.target.value
      })}
            />
          </Form>

      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <BsFillCartCheckFill/><sup>{cart.length}</sup>
    </Dropdown.Toggle>

      <Dropdown.Menu className='Dropdown-center'>
      {(cart.length>0)?(<>
      {cart.map((prod)=>(
      <div className="d-flex flex-row justify-content-evenly align-item-center" style={{width:"18rem"}}>
<div><img src={prod.image} alt={prod.name} className='img-fluid' height="80" width="80" /></div>
<div>{prod.name}</div>
<div>$ {prod.price}</div>
<div>
<BsFillTrashFill onClick={()=>dispatch({
  type:"removefromcart",
  payload:prod,
})}/>
</div>
</div>
      ))}<Link to="/Cart">
  <Button variant="primary">Go to Cart</Button>
</Link></>):
( <span> Cart is Empty</span>)}
      </Dropdown.Menu>
      
    </Dropdown>

        </Container>
      </Navbar>
    </div>
  )
}
