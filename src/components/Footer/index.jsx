import React from 'react';
import './style.scss';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <section id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <h5>Offices</h5>
                                <div>
                                    50 Raritan Center Pkwy, <br />
                                    Edison, NJ 08837, USA
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <ion-icon style={{ color: '#FF268B', marginRight: '15px' }} name="call-outline"></ion-icon>
                                    </div>
                                    <div>8080000000</div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <ion-icon style={{ color: '#FF268B', marginRight: '15px' }} name="mail-outline"></ion-icon>
                                    </div>
                                    <div>8080000000</div>
                                </div>
                                <div>
                                    <span className="icon-media">
                                        <ion-icon style={{ color: '#FF268B', marginRight: '20px', fontSize: '30px' }} name="logo-facebook"></ion-icon>
                                    </span>
                                    <span className="icon-media">
                                        <ion-icon style={{ color: '#FF268B', marginRight: '20px', fontSize: '30px' }} name="logo-instagram"></ion-icon>
                                    </span>
                                    <span className="icon-media">
                                        <ion-icon style={{ color: '#FF268B', marginRight: '20px', fontSize: '30px' }} name="logo-twitter"></ion-icon>
                                    </span>
                                </div>
                            </div>
                            <div className="col-4">
                                <h5>Service</h5>
                                <div>
                                    <Link to="/about">Portfolio</Link>
                                </div>
                                <div>
                                    <Link to="/about">About</Link>
                                </div>
                                <div>
                                    <Link to="/about">Marketplace</Link>
                                </div>
                                <div>
                                    <Link to="/about">Experts</Link>
                                </div>
                                <div>
                                    <Link to="/about">Blog</Link>
                                </div>
                            </div>
                            <div className="col-4">
                                <h5>Popular</h5>
                                <div>
                                    <Link to="/about">Free videos</Link>
                                </div>
                                <div>
                                    <Link to="/about">Tools, apps and plugins</Link>
                                </div>
                                <div>
                                    <Link to="/about">Blog</Link>
                                </div>
                                <div>
                                    <Link to="/about">Photo license</Link>
                                </div>
                                <div>
                                    <Link to="/about">FAQ</Link>
                                </div>
                                <div>
                                    <Link to="/about">API</Link>
                                </div>
                            </div>
                            <div className="col-4">
                                <h5>Service</h5>
                                <div>Training</div>
                                <div>Marketplace</div>
                                <div>Experts</div>
                                <div>Guides</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;
