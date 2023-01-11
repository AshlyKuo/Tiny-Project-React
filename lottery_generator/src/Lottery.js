import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css'

class Lottery extends Component{
    static defaultProps={
        title:'Lotto',
        maxBalls:6,
        maxNum:40
    }
    constructor(props){
        super(props);
        this.state={
            nums:Array.from({length: this.props.maxBalls})
        };
        this.generateNums= this.generateNums.bind(this);
    }

    generateNums(e){
        this.setState(curState => ({
            nums: curState.nums.map(
                n =>  Math.floor(Math.random()* this.props.maxNum)+1
            )
        }))
    }

    render(){
        return(
            <section className='Lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <LotteryBall nums={n} />)}
                </div>
                <button onClick={this.generateNums}>Generate</button>
            </section>
        )
    }
}


export default Lottery;