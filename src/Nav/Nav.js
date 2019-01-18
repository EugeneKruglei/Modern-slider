import React, {Component} from 'react';
import './Nav.css';

const menuItems = [
    'step-1',
    'step-2',
    'step-3',
    'step-4',
    'step-5'
];


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: menuItems[menuItems.indexOf(window.location.hash.slice(2))],
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(menuItem) {
        this.setState({active: menuItem});
    }
    // _handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         handleKeyDown(menuItem){
    //             this.setState({active: menuItem});
    //         }
    //     }
    // }

    // componentWillReceiveProps({props}) {
    //     this.setState({...this.state, props})
    // }
    /*componentWillUpadate(props){
        this.setState({...this.state, props})
    }*/

    render() {
        console.log(this.props.state);
        console.log();
        return (
            <div className="navigation">
                <a href="#/step-1"
                   onClick={this.handleClick.bind(this, menuItems[0])}
                   className={this.state.active === 'step-1' ? "active" : {}}
                >home
                </a>
                <a href="#/step-2"
                   ref="step-2"
                   onClick={this.handleClick.bind(this, menuItems[1])}
                   className={this.state.active === 'step-2' ? "active" : {}}
                >
                    about
                </a>

                <a href="#/step-3"
                   onClick={this.handleClick.bind(this, menuItems[2])}
                   className={this.state.active === 'step-3' ? "active" : {}}>
                    product
                </a>

                <a href="#/step-4"
                   onClick={this.handleClick.bind(this, menuItems[3])}
                   className={this.state.active === 'step-4' ? "active" : {}}>
                    contact
                </a>
                <a href="#/step-5"
                   onClick={this.handleClick.bind(this, menuItems[4])}
                   className={this.state.active === 'step-5' ? "active" : {}}>
                    about1
                </a>
            </div>
        )
    }
}
export default Nav;
