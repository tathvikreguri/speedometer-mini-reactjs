import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  brake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="c1">
        <h1 className="h1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img1"
          alt="speedometer"
        />
        <h1 className="p1">Speed is {count}mph</h1>
        <p className="p2">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="c">
          <button type="button" className="b1" onClick={this.accelerate}>
            Accelerate
          </button>
          <button type="button" className="b2" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
