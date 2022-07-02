import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

type ProductProps = {
  product: any
}

const DetailProduct = ({ product }: ProductProps) => {

  
  if (!product) return null
  return (
    <div>
      {product.name}
    </div>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
//   const paths = data.map(product => (
//     { params: { id: product.id } }
//   ))
//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
//   const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();
//   return {
//     props: {
//       product
//     }
//   }
// }

//SSR 
  export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();
    return {
      props:{product}
    }
  }
export default DetailProduct