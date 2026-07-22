import React from 'react'
import NewArrivals from './NewArrivals'
import TopRated from './TopRated'

const FeaturedProduct = () => {
  return (
    <div className='flex gap-5 flex-wrap sm:'>
      <TopRated/>
      <NewArrivals/>
    </div>
  )
}

export default FeaturedProduct
