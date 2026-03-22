import React from 'react'

import Carousel from '../components/Carousel'
import AboutPage from './AboutPage'
import GalleryPage from './GalleryPage'
import ServicesPage from './ServicesPage'
import ContactPage from './ContactPage'
function HomePage() {
  return (
    <div>
       <Carousel/>
       <AboutPage/>
       <GalleryPage/>
       <ServicesPage/>
       <ContactPage/>
        
    </div>
  )
}

export default HomePage