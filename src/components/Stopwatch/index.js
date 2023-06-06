// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isStopWatchRunning: false, seconds: 0}

  componentWillUnmount() {
    this.clearStopWatchTimer()
  }

  clearStopWatchTimer = () => {
    clearInterval(this.intervalId)
  }

  stopWatchTimerIncrement = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onClickStart = () => {
    this.setState({
      isStopWatchRunning: true,
    })

    this.intervalId = setInterval(this.stopWatchTimerIncrement, 1000)
  }

  onClickStop = () => {
    this.clearStopWatchTimer()
    this.setState({isStopWatchRunning: false})
  }

  onClickReset = () => {
    this.clearStopWatchTimer()
    this.setState({isStopWatchRunning: false, seconds: 0})
  }

  render() {
    const {isStopWatchRunning, seconds} = this.state

    const m = Math.floor(seconds / 60)
    const s = seconds % 60

    const stringifiedMinutes = m < 10 ? `0${m}` : m
    const stringifiedSeconds = s < 10 ? `0${s}` : s

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{`${stringifiedMinutes}:${stringifiedSeconds}`}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onClickStart}
                disabled={isStopWatchRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
