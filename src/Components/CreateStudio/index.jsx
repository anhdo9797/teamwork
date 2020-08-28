import React from 'react';
import { Tooltip } from 'antd';

import { circle, videoStudio } from '../../assets/image';
import './style.scss';

class CreateStudio extends React.PureComponent {
  render() {
    return (
      <div className="createStudio">
        {/* <img src={circle} style={{ position: 'absolute', left: 0 }} /> */}
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
        </div>
      </div>
    );
  }
}

export default CreateStudio;
