import React, { Component } from 'react';
import {randomColor} from './helper'

class Box extends Component{

    constructor(props){
        super(props);
        this.state={
            r: randomColor(),
            g: randomColor(),
            b: randomColor()
        };
        this.generateColor = this.generateColor.bind(this);
    }

    generateColor(e){
        console.log('Click!')

        let newR = randomColor();
        let newG = randomColor();
        let newB = randomColor();

        let newState={}

        newState.r = newR
        newState.g = newG
        newState.b = newB

        this.setState(
            newState
        )
        
    }

    render(){          
        let color =`rgb(${this.state.r},${this.state.g},${this.state.b})`;     
        return <div onClick={this.generateColor} className='Box' style={{backgroundColor: color,width:'200px',height:'200px'}}></div >
    }
}

export default Box;