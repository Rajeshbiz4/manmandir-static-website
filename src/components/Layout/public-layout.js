import React from 'react'
import NavBar from '../navbar';
import WhatsAppButton from '../whatsappButton';
import Footer from '../footer';

const PublicLayout = (props) => (
    <>
        <NavBar />
        <WhatsAppButton />
        {props.children}
        <Footer />
        <div class="copyright_section">
         <div class="container">
            <p class="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
         </div>
      </div>
    </>
)

export default PublicLayout