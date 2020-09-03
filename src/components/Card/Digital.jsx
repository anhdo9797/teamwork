import React from 'react';
import PropTypes from 'prop-types';
import './DigitalCard.scss';
import { Tooltip } from 'antd';

const DigitalCard = ({ src, label }) => {
  return (
    <div className="digitalCard">
      <img src={src} width="62px" height="auto" />

      <h2 style={{ fontSize: 18 }}>{label} </h2>
      <h3 style={{ fontSize: 13, color: '#95A1AC' }}>Our collaborative approach builds brands and apps worth talking adobut</h3>
      <div>
        <Tooltip title={`Go ${label}`} trigger="click">
          <button style={{ float: 'right' }}>
            <ion-icon name="arrow-forward-outline" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default DigitalCard;
