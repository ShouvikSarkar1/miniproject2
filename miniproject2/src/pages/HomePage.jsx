import React from 'react'
import '../styles/HomePageStyles.css'
import HomePageFeatures from '../components/HomePage/HomePageFeatures'
import HomePageGif from '../components/HomePage/HomePageGif'


const HomePage = () => {
  return (
    <div className='HomePage'>
      <HomePageGif/>
      <HomePageFeatures/>
    </div>
  )
}

export default HomePage
