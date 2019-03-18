import React, { Component } from 'react'
import styles from './index.module.css'
import './index.css'
import { CSSTransition } from 'react-transition-group'
import close from '../pop_off_h.png'


class Modal extends Component {
  closeModal() {
    this.props.onClose()
  }

  componentDidMount() {
    console.log(document.getElementsByTagName('body'))
  }

  componentWillReceiveProps(nextProps) {
    const body = document.getElementsByTagName('body')[0]
    if(nextProps.visible) {
      body.style.overflowY = 'hidden'
    } else {
      body.style.overflowY = ''
    }
  }

  render() {
    const { visible, img } = this.props

    return (
      <div className={styles.modalWrapper}>
        <CSSTransition
          in={visible}
          timeout={300}
          classNames="t-modal"
          unmountOnExit
        >
          <div className='t-modal-mask'></div>
        </CSSTransition>
        <CSSTransition
          in={visible}
          timeout={300}
          classNames="t-modal"
          unmountOnExit
        >
          <div className='t-modal-content'>
            <div>
              <img className='t-modal-content-img' src={img} alt=""/>
            </div>
            <img className='t-modal-close' onClick={() =>this.closeModal()} src={close} alt="x"/>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export { Modal }