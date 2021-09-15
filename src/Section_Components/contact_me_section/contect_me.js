import React from 'react';
import './contact_me.css'

function contect_me() {
    return (
        <div className="section-four-container">
            <div className="s2">
                <div className="main-container">
                    <h3 style={{textAlign: 'center'}}>Get In Touch</h3>

                    <form id="contact-form">
                        <label>Name</label>
                        <input className="input-field" type="text" name="name"></input>

                        <label>Subject</label>
                        <input className="input-field" type="text" name="subject"></input>


                        <label>Email</label>
                        <input className="input-field" type="text" name="email"></input>


                        <label>Message</label>
                        <textarea className="input-field" type="text" name="message"></textarea>

                        <input id="submit-btn" type="submit" value="Send"></input>
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default contect_me
