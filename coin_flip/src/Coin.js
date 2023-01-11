import React, { Component } from 'react';
import './Coin.css'

class Coin extends Component{

    render(){
        let imgSrc =`https://tinyurl.com/react-coin-${this.props.face}-jpg`
        return ( 
         <div className='Coin'>
           <img src={imgSrc} />
         </div>)
       
    }
}
export default Coin;