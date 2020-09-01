import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Tooltip, Drawer, Input } from 'antd';
import { NavLink } from 'react-router-dom';

import './header.scss';
import { logo } from '../../assets/icon';
import { girl, line } from '../../assets/image';

const link = (to, label) => (
    <NavLink
        to={to}
        activeStyle={{
            textDecoration: 'underline',
        }}
    >
        {label}
    </NavLink>
);
const linkMobile = (to, label) => (
    <NavLink
        to={to}
        activeStyle={{
            width: '100%',
            padding: '5px',
            backgroundColor: '#f2a7ca',
        }}
    >
        {label}
    </NavLink>
);

const IconNotification = ({}) => {
    return (
        <button className="iconButton">
            <Tooltip placement="bottomLeft" title="Notifications" trigger="click">
                <Badge count={4} size={'small'} title="4 notifications">
                    <ion-icon name="notifications"></ion-icon>
                </Badge>
            </Tooltip>
        </button>
    );
};

const IconSearch = ({ onClick }) => {
    return (
        <Tooltip placement="bottomLeft" title="Search" trigger="click">
            <button
                style={{
                    color: '#FF268B',
                }}
                className="iconButton"
                onClick={onClick}
            >
                <ion-icon name="search" />
            </button>
        </Tooltip>
    );
};

class Header extends React.Component {
    state = {
        visible: false,
        showSearch: false,
    };

    showMenu = () => this.setState({ visible: true });
    closeMenu = () => this.setState({ visible: false });

    render() {
        const { visible, showSearch } = this.state;
        return (
            <div className="header">
                <div className="container ">
                    <div className="wrapContact">
                        <div className="left">
                            {link('/contact', '+1 212 946 2700')}
                            {link('/help', 'Help Center')}
                            {link('/docs', 'Docs')}
                        </div>

                        <div className="right">
                            <a href="/contact">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="/contact">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>

                            <a href="/contact">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="/contact">
                                <ion-icon name="earth-outline"></ion-icon>
                            </a>
                        </div>
                    </div>

                    <div className="wrapNav">
                        <img className="logo" alt="logo" src={logo} />
                        <div className="nav">
                            <nav>
                                {link('/home', 'Home')}
                                {link('/about', 'About')}
                                {link('/services', 'Services')}
                                {link('/pricing', 'Pricing')}
                                {link('/products', 'Products')}
                                {link('/resource', 'Resource')}

                                <IconNotification />
                                <IconSearch />

                                <Tooltip placement="bottomLeft" title="Contact us" trigger="click">
                                    <button className="contactUs">Contact us</button>
                                </Tooltip>
                            </nav>
                        </div>
                        <div className="showOnMobile">
                            <button className="buttonMenu" onClick={this.showMenu}>
                                <ion-icon name="menu-outline"></ion-icon>
                            </button>

                            <Drawer title="Menu" placement="right" closable={false} onClose={this.closeMenu} visible={this.state.visible}>
                                {linkMobile('/home', 'Home')}
                                {linkMobile('/about', 'About')}
                                {linkMobile('/services', 'Services')}
                                {linkMobile('/pricing', 'Pricing')}
                                {linkMobile('/products', 'Products')}
                                {linkMobile('/resource', 'Resource')}
                                <div style={{ display: 'flex', height: 30, margin: '10px 0' }}>
                                    <IconNotification />

                                    {this.state.showSearch ? <Input placeholder="search" /> : null}

                                    <IconSearch onClick={() => this.setState({ showSearch: !showSearch })} />
                                </div>

                                <Tooltip placement="bottomLeft" title="Contact us" trigger="click">
                                    <button className="contactUs">Contact us</button>
                                </Tooltip>
                            </Drawer>
                        </div>
                    </div>

                    <div className="wrapDriving">
                        <div className="text">
                            <div className="wrapLabel">
                                <h2>Driving meaningful change through technology & design</h2>
                                <img src={line} className="line" />
                                <img
                                    src={line}
                                    className="line hiddenOnMobile"
                                    style={{
                                        right: 50,
                                    }}
                                />
                            </div>

                            <h3>
                                Crafting delightful experiences through meticulous attention to detail. We help our clients reach their full potential through serving as the
                                management team.
                            </h3>
                            <div className="wrapButton">
                                <div style={{ display: 'flex', flexDirection: 'column', marginRight: 20 }} className="wrapLatestProject">
                                    <button>Latest Project</button>
                                    <div style={{ height: '30px' }} />
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                </div>

                                <button style={{ color: '#ff268b' }}>
                                    Watch Reel <ion-icon name="arrow-forward-outline"></ion-icon>
                                </button>
                            </div>
                        </div>
                        <img src={girl} className="girl" alt="image" />
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
