import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CartState } from './Context';

export default function Filters() {
  const {productDispatch,
  productState:{sort,stock},}=CartState()
  return (
    <div className='bg-secondary text-white' style={{width:"14rem"}}>
      <h4>Filter Option</h4>
      <Form.Check type="radio" label="Assending" name="r1"   onChange={()=>productDispatch({
        type:"sortbyprice",
        payload:"lowToHigh"
      })} checked={sort==="lowToHigh"?true:false} />
      <Form.Check type="radio" label="Descending" name="r1" onChange={()=>productDispatch({
        type:"sortbyprice",
        payload:"highToLow"
      })} checked={sort==="highToLow"?true:false}  />
      <Form.Check  label="Out of Stock" onChange={()=>productDispatch({
        type:"filterbystock"
      })} checked={stock}  />
      <Button variant="light" className='mt-4 mb-5' onClick={()=>productDispatch({
        type:"clearfilters"
      })} >
      Clear Filters</Button>{' '}
    </div>
  )
}
