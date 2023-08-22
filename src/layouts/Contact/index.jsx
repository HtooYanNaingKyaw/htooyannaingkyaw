import React, { useState } from 'react'
import Wrapper from '../../components/GeneralWrapper'
import Map from '../../components/Map'
import { withScriptjs, withGoogleMap } from 'react-google-maps'

import './styles.css'
import { validateEmail } from '../../util/common'
import firebase from '../../util/Firebase'


const WrappedMap = withScriptjs(withGoogleMap(Map))

function Contact() {
    const [firebaseAddError, setFirebaseAddError] = useState(false)
    const [firebaseAddMessage, setFirebaseAddMessage] = useState("")
    const ref = firebase.database().ref('messages/')

    const sendEmailToMe = (email, name, message) => {
        const userMessage = ref.push()
        userMessage.set({ email, name, message }, function(error) {
            if(error) {
                setFirebaseAddError(true)
            } else {
                setFirebaseAddError(false)
                setFirebaseAddMessage("Send Message Successful!")
            }
        })
    }

    return (
        <Wrapper>
            <div className="split-row">
                <div className="left ls">
                    <div class="about-image">
                        {/* <div class="image overlay-image"></div> */}

                        <div style={{ width: '100%', height: '100%' }}>
                            <WrappedMap
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${'AIzaSyBHtNLWeA52LGTrIHcxExCjAMFNgBpQp14'}`}
                                loadingElement={<div style={{ height: '100%' }} />}
                                containerElement={<div style={{ height: '100%' }} />}
                                mapElement={<div style={{ height: '100%' }} />}
                            />
                        </div>
                    </div>
                </div>
                <div className="right rg">
                    <div className="about-content">
                        <header>
                            <h2>
                                <sapn className="title">Contact Me</sapn>
                            </h2>
                            <h3>
                                <span>Get in touch with me today.</span>
                            </h3>
                            <div class="divider divider-1"></div>
                            <ContactForm sendEmail={sendEmailToMe} />
                            {firebaseAddError && <span className="error">Send message error!</span>}
                            {!firebaseAddError && firebaseAddMessage.length > 0 && <span className="success">{firebaseAddMessage}</span>}
                        </header>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Contact


const ContactForm = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)

    const handleEmail = async (emailT) => {
        let validate = await validateEmail(emailT)
        setEmailError(!validate)
        setEmail(emailT)
    }

    const handleSubmit = async e => {
        if (name && email && message) {
            let success = await props.sendEmail(email, name, message)
            setName("")
            setEmail("")
            setMessage("")
        } else setError(true)
    }

    return (
        <div className="form-wrapper">
            <div className="form-item-wrapper">
                <div className="form-item">
                    <input type="text" id="name"  value={name} onChange={(e) => setName(e.target.value)} />
                    <label for="name">Your Name</label>
                    {error && name.length <= 0 && <span className="error">Please provide a name</span>}
                </div>
            </div>
            <div className="form-item-wrapper">
                <div className="form-item">
                    <input type="text" id="email" value={email} onChange={(e) => handleEmail(e.target.value)} />
                    <label for="email">Your Email</label>
                    {emailError && <span className="error">Please provide a real email address</span>}
                    {error && email.length <= 0 && <span className="error">Please provide a real email address</span>}
                </div>
            </div>
            <div className="form-item-wrapper" style={{ width: "100%", flex: "0 0 100%", maxWidth: "100%" }}>
                <div className="form-item" onChange={(e) => setMessage(e.target.value)} >
                    <textarea type="text" id="message" value={message} />
                    <label for="message">Your Message</label>
                    {error && message.length <= 0 && <span className="error">Please provide a message</span>}
                </div>
            </div>
            <div className="form-item-wrapper" style={{ width: "100%", flex: "0 0 100%", maxWidth: "100%" }}>
                <button onClick={handleSubmit}>Send Message</button>
            </div>
        </div>
    )
}