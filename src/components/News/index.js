import React from "react";
import './style.scss';
import {card1, card2, card3} from "../../assets/image";
import { DatePicker } from 'antd';


class News extends React.Component {
  render() {
    return (
      <div>
        <section id="news">
        <div className="container" >
          <div className="get-in-touch">
            <div className="mask-cover"></div>
            <div className="txt-quote">LET'S GET STARTED YOUR PROJECT WITH PROFESSIONAL WAY</div>
            <div>
              <span className="intro-bold">Get in touch </span>
              <span className="intro-light">
                and let us know <br />
                how we can help
              </span>
            </div>
            <button className="btn-get-started">Get Started </button> 
          </div>
          <div className="our-insight">
            <div className="last-news">
              <div>LATEST NEWS</div>
              <div>
                <strong>Ours insights</strong> & creative ideas
              </div>
            </div>
            <div className="txt-news">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unkno
            </div>
            <div className="group-card">
              <div className="card">
                <img src={card1} alt="card" />
                <div className="txt-card">
                  <div className="date-ceo">
                    <div className="date">
                      <div>Date-time bỏ icon DatePicker vào</div>
                      <div>{DatePicker}</div>
                    </div>
                    <div className="ceo">
                      <div>icon</div>
                      <div>{DatePicker}</div>
                    </div>
                  </div>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Collection with gift on which until
                    accounts
                  </div>
                  <button className="read-more">Read More</button>
                </div>
              </div>
              <div className="card">
                <img src={card2} alt="card-img" />
                <div className="txt-card">
                  <div className="date-ceo">
                    <div className="date">
                      <div>Date-time bỏ icon DatePicker vào</div>
                      <div>DatePicker</div>
                    </div>
                    <div className="ceo">
                      <div>icon</div>
                      <div>DatePicker</div>
                    </div>
                  </div>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Collection with gift on which until
                    accounts
                  </div>
                  <button className="read-more">Read More</button>
                </div>
              </div>
              <div className="card">
                <img src={card3} alt="card-img" />
                <div className="txt-card">
                  <div className="date-ceo">
                    <div className="date">
                      <div>{<DatePicker />}</div>
                      <div>DatePicker</div>
                    </div>
                    <div className="ceo">
                      <div>icon</div>
                      <div>DatePicker</div>
                    </div>
                  </div>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Collection with gift on which until
                    accounts
                  </div>
                  <button className="read-more">Read More</button>
                </div>
              </div>
            </div>
            <div className="view-all"> <button className="btn-view-all">View All posts</button></div>
          </div>
        </div>
        </section>
      </div>
    );
  }
}

export default News;
