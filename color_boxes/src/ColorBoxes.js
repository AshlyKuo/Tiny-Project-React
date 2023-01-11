import React, { Component } from 'react';
import Box from './Box';
import {randomColor} from './helper';
import './ColorBoxes.css'

class ColorBoxes extends Component{
    render(){
        return(
           <div className='ColorBoxes'>
            <div>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            </div>
            <div>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            </div>
            <div>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            </div>
           </div>
        )
    }
}

export default ColorBoxes;



// class ColorBoxes extends Component{
//     static defaultProps ={
//         numBox:18
//     };

//     render() {
//         const boxes = Array.from({length:this.props.numBox}) .map(()=>(
//             <Box />
//         ));
//         return <div>{boxes}</div>
//     }
// }
