import React from 'react'
import Filters from './Filters'
import { CartState } from './Context'
import Singleproduct from './Singleproduct'
export default function Home() {
    const {state:{Products},
  productState:{sort,stock,searchQuery}
  }=CartState()
function transformProducts()
{
  let sortedproducts=Products
  if(sort)
  {
    sortedproducts=sortedproducts.sort((a,b)=>
    sort==="lowToHigh"?a.price-b.price:b.price-a.price)
  }
if(!stock)
{
  sortedproducts=sortedproducts.filter((prod)=>prod.stock)
}
if (searchQuery)
{
  sortedproducts=sortedproducts.filter((prod)=>prod.name.toLowerCase().includes(searchQuery))
}
return sortedproducts;
}
    // console.log(Products)
  return (
    <div className='d-flex flex-row mt-2'>
    <div className='bg-dark'><Filters/></div>
    <div className='row row=cols-1 row-cols-md-4'>{transformProducts().map((prod)=>{
        return <Singleproduct prod={prod}  key={prod.id}/>
    })}</div>
</div>
  )
}
