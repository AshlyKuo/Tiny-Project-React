import logo from './logo.svg';
import './App.css';
import Lottery from './Lottery';
import LotteryBall from './LotteryBall';

function App() {
  return (
    <div className="App">
     <Lottery />
     <Lottery title='Mini Daily' maxNum={10} maxBalls={4} />
    </div>
  );
}

export default App;
