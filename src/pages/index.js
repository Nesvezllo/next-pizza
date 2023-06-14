import React from 'react'

import { client } from '../../sanity/lib/client'

import { Product, FooterBanner, HeroBanner } from '../../components'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
          <h2>Каталог</h2>
          <p></p>
      </div>

      <div className='products-container'>
          {
            products?.map((product, index) => (
              <Product key={product._id} product={product}/>
            ))
          }
      </div>
      {/* <FooterBanner bannerData={bannerData[0]} /> */}
    </>
  )
}

export const getServerSideProps = async() => {
  const query = "*[_type == 'product']"
  const products = await client.fetch(query)

  const bannerQuery = "*[_type == 'banner']"
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
} 

export default Home