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
    </>
)

export default PublicLayout