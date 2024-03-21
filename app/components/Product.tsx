import React from 'react'

const Product = ({product}) => {
  return (
    <div>
        <h2 className="text-lf font-semibold">{product.name}</h2>
    </div>
  )
}

export default Product;