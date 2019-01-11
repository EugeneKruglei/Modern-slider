import React, {Component} from 'react';
import './App.css';
import {Impress, Step} from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import Nav from './Nav/Nav';

let w = window.screen.availWidth;
let h = window.screen.availHeight;

class App extends Component {

    render() {
        return (
            <div>
                <Nav/>
                <Impress
                    progress={true}
                    fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
                >
                    <Step exact path='/step-1' className={'home'}
                          data={
                              {
                                  x: 10000,
                                  y: 10000,
                                  z: 10000,
                                  rotateX: 45,
                                  rotateY: 0,
                                  rotateZ: 0,
                                  scale: 2
                              }} duration={1500}>
                        <p></p>
                    </Step>
                    <Step path='/step-2' className={'about'} data={
                        {
                            x: 10000 - w/2,
                            y: 10000,
                            z: 10000,
                            rotateX: 0,
                            rotateY: 90,
                            rotateZ: 0,
                            scale: 1
                        }} duration={1500}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                    <Step path='menuItems[2]' className={'product'}
                          data={
                              {
                                  x: 10000,
                                  y: 10000,
                                  z: 10000-w/2,
                                  rotateX: 0,
                                  rotateY: 0,
                                  rotateZ: 0,
                                  scale: 1
                              }}
                          duration={1500}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                    <Step path='menuItems[3]' className={'contact'}
                          data={
                              {
                                  x: 10000+w/2,
                                  y: 10000,
                                  z: 10000,
                                  rotateX: 0,
                                  rotateY: -90,
                                  rotateZ: 0,
                                  scale: 1
                              }}
                          duration={1500}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                    <Step exact path='/step-5' className={'about1'}
                          data={
                              {
                                  x: 10000,
                                  y: 10000+h/2,
                                  z: 10000-h/2,
                                  rotateX: 90,
                                  rotateY: 0,
                                  rotateZ: 0,
                                  scale: 1
                              }} duration={1500}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                    <Step path='/step-6' className={'product1'} data={
                        {
                            x: 10000,
                            y: 10000+h/2,
                            z: 10000+w/2-h/2,
                            rotateX: 90,
                            rotateY: 0,
                            rotateZ: 0,
                            scale: 1
                        }} duration={1500}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                </Impress>
            </div>
        );
    }
}

export default App;
