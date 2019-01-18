import React, {Component} from 'react';
import './App.css';
import {Impress, Step} from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import Nav from './Nav/Nav';

let w = window.innerWidth;
let h = window.innerHeight;
let x = window.innerWidth * 2;
let y = window.innerHeight * 2;

/*const menuItems = [
    'step-1',
    'step-2',
    'step-3',
    'step-4',
    'step-5'
];*/


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "active",
            duration: 1500
        };
        // this.handleClick = this.handleClick.bind(this);
    };
/*
    handleClick(menuItem) {
        this.setState({active: menuItem});
    }*/

    // componentWillReceiveProps(nextProps, nextState) {
    // this.setState({ active: menuItems[menuItems.indexOf(window.location.hash.slice(2))]});
    // }

    // menuItems[menuItems.indexOf(window.location.hash.slice(2))]
    render() {
        console.log(window.location.hash.slice(2));
        return (
            <div>
                <Nav current={"active"}/>
                <Impress
                    progress={true}
                    fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
                >
                    <Step exact path='menuItems[0]' className={window.location.hash.slice(2)==='step-1' ? "active home" : {}}
                          data={
                              {
                                  x: x,
                                  y: y,
                                  z: 10000,
                                  rotateX: 0,
                                  rotateY: 0,
                                  rotateZ: 0,
                                  scale: 2
                              }} duration={750}>
                        <p></p>

                    </Step>
                    <Step path='menuItems[1]' className={'about'} data={
                        {
                            x: x - w / 2,
                            y: y - h / 2,
                            z: 10000,
                            rotateX: 0,
                            rotateY: 0,
                            rotateZ: 0,
                            scale: 1
                        }} duration={750}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                    <Step path='menuItems[2]' className={'product'}
                          data={
                              {
                                  x: x + w / 2,
                                  y: y + h / 2,
                                  z: 10000,
                                  rotateX: 0,
                                  rotateY: 0,
                                  rotateZ: 0,
                                  scale: 1
                              }}
                          duration={750}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                    <Step path='menuItems[3]' className={'contact'}
                          data={
                              {
                                  x: x - w / 2,
                                  y: y + h / 2,
                                  z: 10000,
                                  rotateX: 0,
                                  rotateY: 0,
                                  rotateZ: 0,
                                  scale: 1
                              }}
                          duration={750}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                    <Step path='menuItems[4]' className={'about1'}
                          data={
                              {
                                  x: x + w / 2,
                                  y: y - h / 2,
                                  z: 10000,
                                  rotateX: 0,
                                  rotateY: 0,
                                  rotateZ: 0,
                                  scale: 1
                              }} duration={750}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                </Impress>
            </div>
        );
    }
}

export default App;
