import React, { Component } from 'react'
import './style.css'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Mine
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Online forum
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Add Shop
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Feedback
        </a>
        <br/>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Meituan
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          APP
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Wedding
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Parents
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Furniture
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Banquet
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Education
        </a>
        <br/>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          PC version
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Client
        </a>
        <em className="footer__seperator">|</em>
        <br/>
        <p className="footer__copyright">copyright ©2019 SEI31.com</p>
      </footer>
    )
  }
}

export default Footer
