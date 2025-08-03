import React from 'react'
import About from './About'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'


function AboutPage() {
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
        <About/>
        <Footer />
    </div>
  )
}

export default AboutPage