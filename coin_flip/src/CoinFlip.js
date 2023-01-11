import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlip extends Component{
    // static defaultProps ={
    //     coins:[
    //         {side:'heads', imgSrc:'https://tinyurl.com/react-coin-heads-jpg'},
    //         {side:'tails', imgSrc:'https://tinyurl.com/react-coin-tail-jpg'},
    //     ]
    // }
    constructor(props){
        super(props);
        this.state={
            currCoin:null,
            nFlips:0,
            nHeads:0,
            nTails:0
        };
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin(e){
        // const newCoin = choice(this.props.coins);
        // this.setState(st => {
        //     let newState = {
        //         ...st,
        //         currCoin: newCoin,
        //         nFlips: st.nFlips +1

        //     }
        //     if(newCoin.side ==='heads'){
        //         newState.nHeads +=1;
        //     }else{
        //         newState.nTails +=1;
        //     }
        //     return ;
           
        // })

        // Make a random boolean
       let newFace = Math.random() < 0.5;
       let newState ={};
       this.setState( st =>{
        newState.nFlips = st.nFlips +1;
        if(newFace === true){
            newState.nHeads = st.nHeads +1
            newState.currCoin = 'heads'
        }else{
            newState.nTails = st.nTails +1;
            newState.currCoin = 'tail'
        }
        return newState;
       })
       
    }

    render(){
        return(
            <div className='CoinFlip'>
                <h1>Let's Flip a Coin!</h1>
                <Coin face={this.state.currCoin}/>
                <button onClick={this.flipCoin}>FLIP MEEEE</button>
                <h2>
                    Out of {this.state.nFlips} , there have been {this.state.nHeads} heads and {this.state.nTails} tails.
                </h2>
            </div>
        )
    }
}

export default CoinFlip;