// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {status: 0, heads: 0, tails: 0, total: 0}

  onImageUpdate = () => {
    const {status} = this.state
    let imageButton

    if (status === 0) {
      imageButton = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          className="images"
          alt="toss result"
        />
      )
    } else {
      imageButton = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          className="images"
          alt="toss result"
        />
      )
    }

    return imageButton
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({status: tossResult})
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        total: prevState.total + 1,
      }))
    }
  }

  render() {
    const {total, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="coin-toss-head">Coin Toss Game</h1>
          <p className="heads-tails-desc">Heads (or) Tails</p>
          {this.onImageUpdate()}
          <button className="toss-btn" type="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="coins-cont">
            <p className="counts">Total: {total}</p>
            <p className="counts">Heads: {heads}</p>
            <p className="counts">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
