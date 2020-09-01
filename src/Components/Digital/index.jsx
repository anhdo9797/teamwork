import React from 'react';
import './styles.scss';
import DigitalCard from '../Card/Digital';
import { ux, dev, branch } from '../../assets/icon';

const listCard = [
    {
        src: ux,
        label: 'UX Design',
    },
    {
        src: dev,
        label: 'Development',
    },
    {
        src: branch,
        label: 'Branding',
    },
];
class Digital extends React.PureComponent {
    render() {
        return (
            <div className="digital">
                <div className="container wrapDigital">
                    <div className="wrapCard">
                        <div className="colOnce">
                            <DigitalCard label={listCard[0].label} src={listCard[0].src} />
                        </div>
                        <div>
                            <DigitalCard label={listCard[1].label} src={listCard[1].src} />
                            <DigitalCard label={listCard[2].label} src={listCard[2].src} />
                        </div>
                    </div>

                    <div className="text">
                        <h3>CUTTING-EDGE BRAND EXPERIENCES FOR COMPANIES</h3>
                        <h1>Digital creators </h1>
                        <h2>& Strategists</h2>
                        <p>
                            We value our craft, have a deep passion for progression, and exist to solve challenges for brands we believe in. Since the beginning, our mission has
                            been to do great work and to have a great time doing it We believe our mission has guided us well.{' '}
                        </p>
                        <p>We build valuable brand and digital experiences that people love</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Digital;
