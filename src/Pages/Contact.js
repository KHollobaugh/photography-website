import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return(
        <div className="contact-page">
        <div className="contact-columns">
        <div className="contact-column-one">
        <h1>Let's Chat!</h1>
        <p>I would love to hear from you! You can reach me at ElifTurkPhotography@gmail.com, or just fill out this form.</p>
        <p>My work hours are Monday-Friday, 8am to 5pm, but I will do my best to get back to you promptly regardless of when you contact me.</p>
        <p>I am located in Grand Rapids, MI but happy to travel.</p>
        </div>
        <div className="contact-column-two">
        <ContactForm />
        </div>

        </div>

        </div>
    )
}

export default Contact;