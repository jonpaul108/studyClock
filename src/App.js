import React, {
  Component
} from 'react';
import './App.css';
import Clock from './clockFace';
import EnterMinutes from './enterMinutes';
import {
  getTime
} from './utils';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: ['0', '0'],
      sec: ['0', '0'],
      mil: 0,
      studyTime: 0,
      restTime: 600000,
      rest: false,
    }
    this.startClock = this.startClock.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pause = this.pause.bind(this);
    this.setState = this.setState.bind(this);
    this.soundInput = React.createRef();
  }

  startClock(e) {
    this.setState({
      play: true
    })
    setInterval(() => {
      if (this.state.mil > 0 && this.state.play) {
        const time = getTime(this.state.mil);
        this.setState({
          ...time
        });
      } else {
        const rest = !this.state.rest;
        console.log(rest);
        let mil;
        if (rest) {
          mil = this.state.restTime;
        } else {
          mil = this.state.studyTime;
        }
        this.setState({
          mil,
          rest
        }, () => {
          this.refs.audio.play()
        })
      }
    }, 1000);
  }

  handleSubmit(min) {
    const mil = (1000 * min * 60);
    const sec = 0;
    this.setState({
      min,
      studyTime: mil,
      sec,
      mil
    });
  }

  pause() {
    this.setState({
      play: false
    })
  }

  render() {
    const {
      min,
      sec,
    } = this.state;
    return (
      <div className="App">
        <header className='head'><h1>Study Clock</h1></header>
        <main className='container'>
          <Clock
            startClock={this.startClock}
            min={min}
            sec={sec}
            pause={this.pause}
            />
        </main>
        <EnterMinutes handleSubmit={this.handleSubmit} />
          <div>
            <audio ref='audio' src='zenbuddhistsound.mp3'  controls ></audio>
          </div>
      </div>
    );
  }
}

export default App;