import React from 'react'
import NavBar from '../navbar';
import WhatsAppButton from '../whatsappButton';
import Footer from '../footer';
import ContactDetailBar from '../contact-details-bar';

const PublicLayout = (props) => (
    <>
        <NavBar />
        <WhatsAppButton />
        {props.children}
        <Footer />
    </>
)

export default PublicLayout