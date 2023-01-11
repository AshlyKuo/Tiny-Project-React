class App extends React.Component{
    render(){
        return( 
         <div>
           <h1>Slot Machine</h1>
           <Machine
           m1='🥳'
           m2='🥳'
           m3='🤪'
           />
           <Machine
           m1='🥳'
           m2='🥳'
           m3='🥳'
           />
         </div>
        )  
    }
}


ReactDOM.render(<App />, document.getElementById('root'));