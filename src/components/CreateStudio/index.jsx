import React from 'react';
import { Tooltip } from 'antd';

import { videoStudio, pattern } from '../../assets/image';
import './style.scss';

class CreateStudio extends React.PureComponent {
    render() {
        return (
            <div className="createStudio">
                <div className="lineCircle" />
                <div className="lineCircle" style={{ left: '-30vw' }} />
                <div className="container">
                    <div className="create">
                        <div className="text">
                            <h3>WE ARE A FUTURE-ORIENTED HYBRID AGENCY</h3>
                            <h1>Creative Studio </h1>
                            <h2>& Technology</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: '40%' }}>
                                    <h1>20+</h1>
                                    <p style={{ fontWeight: 'bold', color: 'black' }}>Launched startups</p>
                                    <p>We specialize in designing and develping</p>
                                </div>
                                <div style={{ width: '40%' }}>
                                    <h1>1.1k</h1>
                                    <p style={{ fontWeight: 'bold', color: 'black' }}>Completed Projects</p>
                                    <p>We specialize in designing and develping</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Tooltip title="Play Video" trigger="click" style={{ margin: '0 auto' }}>
                                <img src={videoStudio} alt="video" className="video" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="specialize">
                        <div className="text">
                            <h3>WE ARE A CREATIVE STUDIO FOUNDED IN NYC</h3>
                            <h1>We specialize in</h1>
                            <h2>building brands</h2>
                            <p>We treat branding, design & marketing as fundamentally liked & create brand experiences that feel familiar yet new. They have to resonate.</p>
                        </div>
                        <img src={pattern} className="pattern" />

                        <div className="wrapCircle">
                            <div style={{ zIndex: 1 }}>
                                <div className="circle" style={{ margin: 'auto' }}>
                                    <Tooltip title="Customers">
                                        <h1 style={{ color: '#FC215D' }}>120 </h1>
                                        <h2>Customers</h2>
                                    </Tooltip>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
                                <div className="line" />
                                <div className="circle">
                                    <Tooltip title="Offices">
                                        <h1 style={{ color: '#5837FF' }}>8+</h1>
                                        <h2>Offices</h2>
                                    </Tooltip>
                                </div>
                                <div className="circle">
                                    <Tooltip title="Projects">
                                        <h1 style={{ color: '#FF8B3D' }}>2k</h1>
                                        <h2>Projects </h2>
                                    </Tooltip>
                                </div>
                            </div>
                            <div style={{ zIndex: 1 }}>
                                <div className="circle" style={{ margin: 'auto' }}>
                                    <Tooltip title="Workers">
                                        <h1 style={{ color: '#1AE3E4' }}>40</h1>
                                        <h2>Workers</h2>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStudio;
