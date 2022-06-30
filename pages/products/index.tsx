import { GetStaticProps } from 'next'
import React from 'react'

type ProductProps = {
  products: any[];
}

const Products = ({products}: ProductProps) => {
  return (
    <div>
      {products.map( item => (
        <div key={item.id}> 
          {item.name}
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
  console.log('getStaticProps');
  const responsive = await fetch('https://6110f09bc38a0900171f0ed0.mockapi.io/products');
  const data = await responsive.json();
  return {
    props: {
      products: data
    }
  }
}

export default Products