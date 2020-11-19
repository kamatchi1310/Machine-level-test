import React from 'react';
import './cards.css';
import shopping from './image/shopping-cart-emoji.png'
import chatbot from './image/chatbot.png';
import Account from './image/account.png';
import cloud from './image/cloud.png';
import mobile from './image/mobile.png';
import consulting from './image/consulting.png'


export default class Cards extends React.Component {
    render() {
        return (
            <div>
            <div className="row">
                <div className="column">
                    <a className="cardlink" href="#">
                        <div className="card" style={{ backgroundColor: "gray" }} >
                        <img className="card-img-top" src={shopping} alt="Card image cap" />
                        <div className="card-body ">
                            <h2 className="card-title">E-Commerce</h2>
                            <p className="chips">E-Commerce development</p>
                            <p className="chips">Migration Web development</p>
                            <p className="chips">Upgradation</p>
                            <p className="chips">Security Services</p>
                            <p className="chips">Maintenance and support</p>
                            <p className="chips">Content Management development</p>
                            <p className="chips">Responsive</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="column">
                    <a className="cardlink" href="#">
                        <div className="card" style={{ backgroundColor: "lightGreen" }} >
                            <img className="card-img-top" src={chatbot} alt="Card image cap" height="100px" />
                            <div className="card-body">
                                <h2 className="card-title">Chatbot</h2>
                                <p className="chips">Drift for Enterprise</p>
                            <p className="chips">Account Based Marketing Meeting</p>
                            <p className="chips">Reply Management</p>
                            <p className="chips">Email Bots</p>
                            <p className="chips">Video/Voice</p>
                            <p className="chips">Unified Agent View</p>
                            <p className="chips">Cobrowse</p>
                            <p className="chips">Live Chat</p>
                            <p className="chips">Voip</p>
                            <p className="chips">Analytics</p>
                            <p className="chips">Integration</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="column">
                    <a className="cardlink" href="#">
                        <div className="card" style={{ backgroundColor: "lightPink" }} >
                            <img className="card-img-top" src={Account} alt="Card image cap" height="100px" />
                            <div className="card-body">
                                <h2 className="card-title">Web Application Development</h2>
                                <p className="chips">Industry Specific Business Solution</p>
                            <p className="chips">Web portal development</p>
                            <p className="chips">SPAs web development</p>
                            <p className="chips">Progressive Web App development</p>
                            <p className="chips">Maintenance & support</p>
                            <p className="chips">Mockups and Design</p>
                            <p className="chips">Responsive</p>
                            </div>
                        </div>
                    </a>
                </div>

            </div>

            <div className="row">
                <div className="column">
                    <a className="cardlink" href="#">
                        <div className="card" style={{ backgroundColor: "lightSalmon" }} >
                        <img className="card-img-top" src={cloud} alt="Card image cap" height="100px" />
                        <div className="card-body ">
                            <h2 className="card-title">Cloud</h2>
                            <p className="chips">Managed Services</p>
                            <p className="chips">Devops Automation</p>
                            <p className="chips">Optimization</p>
                            <p className="chips">Migration And Deployment</p>
                            <p className="chips">Well architect frameworks</p>
                            <p className="chips">Security and Compliance</p>
                            <p className="chips">Cost and Capacity</p>
                            <p className="chips">Amazon EC2 for MS Windows</p>

                        </div>
                    </div>
                    </a>
                </div>
                <div className="column">
                    <a className="cardlink" href="#">
                        <div className="card" style={{ backgroundColor: "paleTurquoise" }} >
                            <img className="card-img-top" src={mobile} alt="Card image cap" height="100px" />
                            <div className="card-body">
                                <h2 className="card-title">Mobile App Development</h2>
                                <p className="chips">Mobile Strategy and Consulting</p>
                                <p className="chips">Cross Platform App Development</p>
                                <p className="chips">Android and IOS App Development</p>
                                <p className="chips">Custom App Development</p>
                                <p className="chips">Cross Platform App</p>
                                <p className="chips">Enterprise Mobile App</p>
                                <p className="chips">Mobile Enablement</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="column">
                    <a className="cardlink" href="#">
                        <div className="card" style={{ backgroundColor: "thistle" }} >
                            <img className="card-img-top" src={consulting} alt="Card image cap" height="80px" width="140px" />
                            <div className="card-body">
                                <h2 className="card-title">Consulting CTO</h2>
                                <p className="chips">Educate on Trending concepts</p>
                                <p className="chips">Identify Risk</p>
                                <p className="chips">Improve Quality of Development</p>
                                <p className="chips">Security Services of development</p>
                                <p className="chips">Optimize Staff</p>
                                <p className="chips">End-to-end Support</p>
                                <p className="chips">Cross Platform App</p>
                                <p className="chips">Educate on Trending concepts</p>

                            </div>
                        </div>
                    </a>
                </div>

            </div>
            </div>
        )
    }
}