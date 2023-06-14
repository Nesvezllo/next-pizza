import React from 'react'

import Link from "next/link"

import { urlFor } from '../lib/client.js'

const HeroBanner = ({ bannerData }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        {/* <p className='beats-solo'>{bannerData.smallText}</p> */}
        <h3>{bannerData.midText}</h3>
        <h3>{bannerData.midText}</h3>
        <h3>{bannerData.midText}</h3>
        <img  className='hero-banner-image' src={urlFor(bannerData.image)} alt="" />
      </div>
      <Link href={`/product/${bannerData.product}`}>
          <button>{bannerData.buttonText}</button>
      </Link>
      <div className='desc'>
        {/* <h5>Description</h5>
        <p>{bannerData.desc}</p> */}
      </div>
    </div>
  )
}

export default HeroBanner