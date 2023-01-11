class Machine extends React.Component{
    render(){
        const {m1,m2,m3} = this.props;
        const winner = (m1 === m2) && (m2===m3);
        return(
            <div>
            <p>{this.props.m1} {this.props.m2} {this.props.m3}</p>
            <p>{winner? 'Winner' : 'Loser'}</p>
            </div>
        )


        //My bad idea
        // if(this.props.m1=this.props.m2 =this.props.m3){
        //     return <p>Win!</p>
        // }else{
        //     return <p>Lose!</p>
        // }
    }
}