import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: true}

  onClicking = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  render() {
    const {lightMode} = this.state
    let changeButton
    if (lightMode === true) {
      changeButton = (
        <div className="innerCon1">
          <h1 className="mainH1">click to Change Mode</h1>
          <button className="lightBton" type="button" onClick={this.onClicking}>
            Light Mode
          </button>
        </div>
      )
    } else {
      changeButton = (
        <div className="innerCon2">
          <h1 className="mainH2">click to Change Mode</h1>
          <button className="darkBton" type="button" onClick={this.onClicking}>
            Dark Mode
          </button>
        </div>
      )
    }

    return <div className="mainCon">{changeButton}</div>
  }
}

export default LightDarkMode
