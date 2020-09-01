import React from 'react';
import './style.scss';
import { card1, card2, card3 } from '../../assets/image';
import { CalendarOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Tooltip, Button } from 'antd';

class News extends React.Component {
    //bij chi moo hef
    render() {
        return (
            <div>
                <section id="news">
                    <div className="container">
                        <div className="get-in-touch">
                            <div className="mask-cover"></div>
                            <div className="txt-quote">LET&#39S GET STARTED YOUR PROJECT WITH PROFESSIONAL WAY</div>
                            <div>
                                <span className="intro-bold">Get in touch </span>
                                <span className="intro-light">
                                    and let us know <br />
                                    how we can help
                                </span>
                            </div>
                            <Tooltip placement="topLeft" title="Get Started">
                                <Button className="btn-get-started">Get Started</Button>
                            </Tooltip>
                        </div>
                        <div className="our-insight">
                            <div className="last-news">
                                <div style={{ color: '#019DD8' }}>LATEST NEWS</div>
                                <div>
                                    <strong style={{ color: '#3A364E' }}>Ours insights</strong> & creative ideas
                                </div>
                            </div>
                            <div className="txt-news">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the
                                1500s, when an unkno
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <div className="group-card">
                                        <div className="card">
                                            <div className="mask-cover"></div>
                                            <img className="card-img-top" src={card3} alt="Card image cap" />
                                            <div className="txt-card card-body">
                                                <div className="date-ceo">
                                                    <div className="date">
                                                        <div>
                                                            <CalendarOutlined />
                                                        </div>
                                                        <div>10 FEB 2018</div>
                                                    </div>
                                                    <div className="ceo">
                                                        <div>
                                                            <UserOutlined />
                                                        </div>
                                                        <div>CEO</div>
                                                    </div>
                                                </div>
                                                <div className="txt-ceo">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Collection with gift on which until accounts
                                                </div>
                                                <button className="read-more">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="group-card">
                                        <div className="card">
                                            <div className="mask-cover"></div>
                                            <img className="card-img-top" src={card2} alt="Card image cap" />
                                            <div className="txt-card card-body">
                                                <div className="date-ceo">
                                                    <div className="date">
                                                        <div>
                                                            <CalendarOutlined />
                                                        </div>
                                                        <div>10 FEB 2018</div>
                                                    </div>
                                                    <div className="ceo">
                                                        <div>
                                                            <UserOutlined />
                                                        </div>
                                                        <div>CEO</div>
                                                    </div>
                                                </div>
                                                <div className="txt-ceo">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Collection with gift on which until accounts
                                                </div>
                                                <button className="read-more">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="group-card">
                                        <div className="card">
                                            <div className="mask-cover"></div>
                                            <img className="card-img-top" src={card1} alt="Card image cap" />
                                            <div className="txt-card card-body">
                                                <div className="date-ceo">
                                                    <div className="date">
                                                        <div>
                                                            <CalendarOutlined />
                                                        </div>
                                                        <div>10 FEB 2018</div>
                                                    </div>
                                                    <div className="ceo">
                                                        <div>
                                                            <UserOutlined />
                                                        </div>
                                                        <div>CEO</div>
                                                    </div>
                                                </div>
                                                <div className="txt-ceo">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Collection with gift on which until accounts
                                                </div>
                                                <button className="read-more">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="view-all">
                                <Tooltip placement="topLeft" title="View All Posts">
                                    <Button className="btn-view-all">View All posts</Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default News;
