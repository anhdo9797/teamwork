import React from 'react';
import './style.scss';
import 'antd/dist/antd.css';

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
                                        <ion-icon style={{ color: '#FF268B', marginRight: '10px' }} name="call-outline"></ion-icon>
                                    </div>
                                    <div>8080000000</div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <ion-icon style={{ color: '#FF268B', marginRight: '10px' }} name="mail-outline"></ion-icon>
                                    </div>
                                    <div>8080000000</div>
                                </div>
                                <div>
                                    <span className="icon-media">
                                        <ion-icon style={{ color: '#FF268B', marginRight: '10px', fontSize: '20px' }} name="logo-facebook"></ion-icon>
                                    </span>
                                    <span className="icon-media">
                                        <ion-icon style={{ color: '#FF268B', marginRight: '10px', fontSize: '20px' }} name="logo-instagram"></ion-icon>
                                    </span>
                                    <span className="icon-media">
                                        <ion-icon style={{ color: '#FF268B', marginRight: '10px', fontSize: '20px' }} name="logo-twitter"></ion-icon>
                                    </span>
                                </div>
                            </div>
                            <div className="col-4">
                                <h5>Service</h5>
                                <div>Portfolio</div>
                                <div>About</div>
                                <div>Marketplace</div>
                                <div>Experts</div>
                                <div>Blog</div>
                            </div>
                            <div className="col-4">
                                <h5>Popular</h5>
                                <div>Free videos</div>
                                <div>Tools, apps and plugins</div>
                                <div>Blog</div>
                                <div>Photo license</div>
                                <div>FAQ</div>
                                <div>API</div>
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
