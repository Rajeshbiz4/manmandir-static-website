
import "./contact.css";
import React, { useState } from 'react';
import axios from 'axios';
import { json } from "react-router-dom";


const Contact = () => {

  const [ contacusData, setContactus ] = useState({
    name: null,
        email: null,
        mobile: null,
        desc: null,
  })

  const onChange = (e) => {
    setContactus( { ...contacusData , [e.target.name]: e.target.value})
  }

  const postData = async () => {
    if(contacusData.name && contacusData.mobile && contacusData.email && contacusData.desc ){
    try {
      const response = await axios.post('https://test-node-project-delta.vercel.app/register', {
        // Your request data here
        ...contacusData
      },
      {
        headers: {
          'Content-Type': 'application/json', // Example header, adjust as needed
          // Add any other headers here
        },
      });

      // Handle the response data
      // setResponseData(response.data);
      console.log('Response:', response);
      alert(" Thanks for connecting with us, soon we will contact you.")
      setContactus({
        name: '',
        email: '',
        mobile: '',
        desc: '',
      })
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  }
  };

  return (
    <>
      <div class="contact_section layout_padding" id="contact">
        <div style={{ width : "90%",   margin: '0 auto'}}>
          <div class="contact_section_2">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="mail_section_1">
                  <h1 class="contact_taital">Contact Us</h1>
             
                  <input
                    type="text"
                    class="mail_text"
                    id="input"
                    placeholder="Name"
                    name="name"
                    value={contacusData.name}
                    onChange={onChange}
                  />
                  <input
                    type="email"
                    class="mail_text"
                    id="input"
                    value={contacusData.email}
                    placeholder="Email"
                    name="email"
                    onChange={onChange}
                  />
                  <input
                    type="mobile"
                    class="mail_text"
                    id="input"
                    value={contacusData.mobile}
                    placeholder="Phone Number"
                    name="mobile"
                    onChange={onChange}
                  />
                  <textarea
                    class="massage-bt"
                    placeholder="Massage"
                    rows="5"
                    id="comment"
                    value={contacusData.desc}
                    onChange={onChange}
                    name="desc"></textarea>
                  <div class="send_bt">
                    <a type="submit" onClick={() => postData()}>SEND</a>
                  </div>
              
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="map_main">
                  <div class="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Shrushti Chowk, Prabhat Nagar, Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411061"
                      width="600"
                      height="360"
                      frameborder="0"
                      style={{ border: 0, width: "100%" }}
                      allowfullscreen=""></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
