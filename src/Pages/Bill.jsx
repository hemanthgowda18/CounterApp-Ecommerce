import React from 'react'

const Bill = (props) => {
  return (
    <div id="info" >
      
       <h1>BILLING INFO</h1>
       <h1>PRICE:84000</h1>
       <h1>QTY:{props.qty}</h1>
    <h1>TOTAL AMOUNT:{props.cost}</h1>
    
    </div>
  )
}

export default Bill