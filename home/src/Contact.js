import React from 'react';
import whatsapp from './image/whatsapp.png';
import facebook from './image/facebook.png'
import linkedin from './image/linkedin.png'

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <form className="form-contact">
                    <h3>Aalavai Technologies</h3>
                    <hr className="hr1" />
                    <address>148A, 19th B Cross Rd, Sector 7,
                    HSR Layout, Bengaluru, Karnataka 560102 </address><br />
                    <address>+91 8220130624</address><br />
                    <address>contact@aalavai.com</address><br />
                    <address>Make Your Ideas into Digital,</address>
                </form>
                <form className="form-about">
                    <h3>About Company</h3>
                    <hr className="hr2" />
                    <p>Aalavai is one of the fastest growing technology consulting
                    company with expertise across E-commerce,cloud, big data, databases,
                        artificial intelligence,Web,App and product engineering</p>
                        <button className="aboutButton">More Info</button>
                        <button className="aboutButton" style={{marginTop:"10px"}}>Contact Us</button>
                </form>
                <form className="form-sitemap">
                    <h3>Sitemap</h3>
                    <hr className="hr2" /><br/>
                    <a className="sitelink" href="#">Home</a><br/><br/>
                    <a className="sitelink" href="#">About</a><br/><br/>
                    <a className="sitelink" href="#">Career</a><br/><br/>
                    <a className="sitelink" href="#">Blog</a><br/><br/>
                    <a className="sitelink" href="#">Contact</a>
                </form>
                <form className="form-sitemap2">
                    <a className="sitelink" href="#">Chatbot</a><br/><br/>
                    <a className="sitelink" href="#">Mobile Apps</a><br/><br/>
                    <a className="sitelink" href="#">Web Apps</a><br/><br/>
                    <a className="sitelink" href="#">E-Commerce</a><br/><br/>
                    <a className="sitelink" href="#">Help</a>
                </form>
                <form className="form-social">
                    <h3>Social</h3>
                    <hr className="hr3" /><br/>
                    <a className="sitelink" href="#"><img className="social" src={whatsapp}/></a>
                    <a className="sitelink" href="#"><img className="social" src={facebook}/></a>
                    <a className="sitelink" href="#"><img className="social" src={linkedin}/></a><br/><br/>
                    <p>Follow us in</p>
                </form>


            </div>
        )
    }
}

export default Contact;