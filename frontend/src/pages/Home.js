import React from 'react'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'

function Home() {
  return (
    <div>
      <BannerProduct/>

      <HorizontalCardProduct category={"shirts"} heading={"Top's shirts"}/>
      <HorizontalCardProduct category={"shoes"} heading={"Top's shoes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Top's Watches"}/>
      <HorizontalCardProduct category={"shorts"} heading={"Top's Shorts"}/>
    </div>
  )
}

export default Home
