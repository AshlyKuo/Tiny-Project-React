import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component{

    constructor(props){
        super(props);
        this.state={
            dice1: 'one',
            dice2: 'three',
            rolling: false
        };
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(e){
        let numArray = ['one','two','three','four','five','six']
        let ran1 = numArray[Math.floor(Math.random()*6)]
        let rna2 = numArray[Math.floor(Math.random()*6)]
        this.setState({
            dice1: ran1,
            dice2: rna2,
            rolling: true
        })

        //Wait one second, then set rolling to false
        setTimeout(()=>{
            this.setState({rolling:false})
        },1000)
    }

    render(){
        return(
            <div className='RollDice'>
             <div className='RollDice-container'>
                 <Dice num = {this.state.dice1} rolling={this.state.rolling}/>
                 <Dice num = {this.state.dice2} rolling={this.state.rolling}/>
             </div>
                <button onClick={this.handleClick} disabled={this.state.rolling}>
                    {this.state.rolling? 'Rolling...': 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice;