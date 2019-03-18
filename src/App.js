import React, { Component } from 'react';
// import { Modal } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'
import logo from './logo.svg'
import { Modal } from './modal'
import huge from './huge.jpeg'
import styles from './App.module.css'

class App extends Component {
  constructor() {
    super()
    this.state= {
      visible: false
    }
  }

  showModal() {
    this.setState({
      visible: true
    })
  }
  closeModal() {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.showModal()}>1234</button>
        <Modal
          visible={this.state.visible}
          transparent
          onClose={() => this.closeModal()}
          img={huge}
        >
          <div>
            <img className={styles.bgimg} alt='' src={huge} />
            <span>查看更多</span>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
