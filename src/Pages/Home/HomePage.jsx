import React from 'react'
import Navbar from '../../component/Navbar'
import Hero from './Hero'
import Products from './Products'
import Footer from '../../component/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function HomePage() {
  return (
    <div>
          <FloatingWhatsApp
          phoneNumber="+2347035722334" // Replace with your WhatsApp number
          accountName="Mummy Zee Store" // The display name
          avatar="/image/mummyZee Logo.png" // Profile image URL
          chatMessage="Hi, welcome to Mummy Zee Store, how can we help you today ? 🙂" // Initial message
          statusMessage="Online"
          placeholder="Type your message..."
          darkMode={false}
          allowClickAway
          notification
          notificationSound
        />
        <Navbar/>
        <Hero/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default HomePage