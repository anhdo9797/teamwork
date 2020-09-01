import React from 'react';
import './style.scss';
import { build2, build1, build3, build4, line } from '../../assets/image';

class BuildBrands extends React.Component {
    render() {
        return (
            <div>
                <section id="build-brands">
                    <div className="container">
                        <div className="group-title">
                            <div></div>
                            <div style={{ marginBottom: '40px', marginLeft: '1rem' }}>
                                <div className="title">WITH KNOWLEDGE HEART & PASSION</div>
                                <div className="intro-bold">We build brands</div>
                                <div className="intro-light">for a digital world</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="group-card" style={{ marginTop: '-100px' }}>
                                    <div className="card">
                                        <img className="card-img-top" src={build1} alt="Card image cap" />
                                        <div className="card-body">
                                            <div>
                                                <img className="line" src={line} alt="Card image cap" />
                                            </div>
                                            <div className="card-txt">
                                                <div>Marketing</div>
                                                <div>SEO Project Management Tool</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="group-card">
                                    <div className="card">
                                        <img className="card-img-top" src={build2} alt="Card image cap" />
                                        <div className="card-body">
                                            <div>
                                                <img className="line" src={line} alt="Card image cap" />
                                            </div>
                                            <div className="card-txt">
                                                <div>UI Design</div>
                                                <div>Desktop Sign Up Flow</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="group-card" style={{ marginTop: '-100px' }}>
                                    <div className="card">
                                        <img className="card-img-top" src={build4} alt="Card image cap" />
                                        <div className="card-body">
                                            <div>
                                                <img className="line" src={line} alt="Card image cap" />
                                            </div>
                                            <div className="card-txt">
                                                <div>UI Design </div>
                                                <div>Developers Working Hard</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="group-card">
                                    <div className="card">
                                        <img className="card-img-top" src={build3} alt="Card image cap" />
                                        <div className="card-body">
                                            <div>
                                                <img className="line" src={line} alt="Card image cap" />
                                            </div>
                                            <div className="card-txt">
                                                <div>Application</div>
                                                <div>Coin View Crypto App</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default BuildBrands;
