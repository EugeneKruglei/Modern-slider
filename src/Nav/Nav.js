import React, {Component} from 'react';
import './Nav.css';

const menuItems = [
    'step-1',
    'step-2',
    'step-3',
    'step-4',
    'step-5',
    'step-6',
    'step-7'
];


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: menuItems[menuItems.indexOf(window.location.hash.slice(2))],
        };
    };

    _handleClick(menuItem) {
        this.setState({active: menuItem});
    }

    render() {
        console.log(window.location.hash.slice(1));
        return (
            <div className="navigation">
                <a href="#/step-1" onClick={this._handleClick.bind(this, menuItems[0])}
                   className={this.state.active === menuItems[0] ? "active" : {}}
                >home
                </a>
                <a href="#/step-2" onClick={this._handleClick.bind(this, menuItems[1])}
                   className={this.state.active === menuItems[1] ? "active" : {}}>
                    about
                </a>

                <a href="#/step-3" onClick={this._handleClick.bind(this, menuItems[2])}
                   className={this.state.active === menuItems[2] ? "active" : {}}>
                    product
                </a>

                <a href="#/step-4" onClick={this._handleClick.bind(this, menuItems[3])}
                   className={this.state.active === menuItems[3] ? "active" : {}}>contact
                </a>
                <a href="#/step-5" onClick={this._handleClick.bind(this, menuItems[4])}
                   className={this.state.active === menuItems[4] ? "active" : {}}>
                    about1
                </a>

                <a href="#/step-6" onClick={this._handleClick.bind(this, menuItems[5])}
                   className={this.state.active === menuItems[5] ? "active" : {}}>
                    product1
                </a>
            </div>
        )
    }
}
export default Nav;
