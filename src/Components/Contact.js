import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact-section">
                <h2>Subscribe to our newsletter and be wished the merriest Christmas!</h2>
            </div>
            <div className="content">
                <p>
                Due to the lorem not generating I'll have to type a bunch of gibberish.
                I hope my team member don't hate me for this but this all I have, hopefully the email form is working as well
                Thank you for checking the part of the page out 
                </p>
            </div>
            <form className="contact-form"/>
                    <input type="email" 
                    className="user-input" 
                    placeholder="Please enter your email"/>
                    <button type="submit" className="submit-button">Subscribe</button>
        </>
    );
}

export default Contact;

{/* backup code
    
    function Contact() {
    return (
        <div className = "contact-section">
            <h2>Subscribe to our newsletter and get absolutely nothing off</h2>
            <div className="content">
                <p>
                Due to the lorem not generating I'll have to type a bunch of gibberish.
                I hope my team member don't hate me for this but this all I have, hopefully the email form is working as well
                Thank you for checking the part of the page out 
                </p>
                <form className="contact-form"/>
                    <input type="email" className="user-input" placeholder="Please enter your email"/>
                    <button type="submit" className="submit-button">Subscribe</button>
            </div>
            
        </div>
    )
}

export default Contact;

*/}