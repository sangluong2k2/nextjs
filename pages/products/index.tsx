import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link';
import React from 'react'

type ProductProps = {
  products: any[];
}

const Products = ({products}: ProductProps) => {

  return (
    <div>
      {products.map( item => (
        <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  console.log('getStaticProps');
  const data = await( await fetch('https://62bfe6c1d40d6ec55cc77e67.mockapi.io/products')).json();
  return {
    props: {
      products: data.map(item => ({id: item.id, name: item.name}))
    }
  }
}

export default Products