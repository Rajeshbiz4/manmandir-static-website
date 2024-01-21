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
         <div class="">
            <p class="copyright_text">   © {new Date().getFullYear()} All Rights Reserved.</p>
         </div>
      </div>
    </>
)

export default PublicLayout