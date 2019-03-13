import React, { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {
  render() {
    return <header>
      <nav className="navbar header-nav fixed-top navbar-expand-lg header-nav-light">
        <div className="container">
          <Link href='/#home'>
            <a className="navbar-brand">
              <img src="static/img/email-verification-service-logo-thechecker.png" />
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link href='/#why'>
                  <a className="nav-link">Why TheChecker</a>
                </Link>
              </li>
              <li>
                <Link href='/#features'>
                  <a className="nav-link">Features</a>
                </Link>
              </li>
              <li>
                <Link href='/integrations'>
                  <a className="nav-link">{this.props.integrations}</a>
                </Link>
              </li>
              <li>
                <Link href='/#reviews'>
                  <a className="nav-link">Reviews</a>
                </Link>
              </li>
              <li>
                <Link href='/pricing'>
                  <a className="nav-link" href="pricing.html">{this.props.pricing}</a>
                </Link>
              </li>
              <li>
                <Link href='/#home'>
                  <a className="nav-link" href="javascript:;">Resources</a>
                </Link>
                <span className="sub-menu-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-angle-down"></i></span>
                <ul className="sub-menu">
                  <li>
                    <Link href='/blog'>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/prices'>
                      <a>Price</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faqs'>
                      <a>Faq's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contactus'>
                      <a>{this.props.contactus}</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='/'>
                  <a className="nav-link">Login</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className="nav-btn nav-link">Try For Free</a>
                </Link>
              </li>
              <li className='flag'>
                <button onClick={this.props.en}>
                  <img src='static/img/united-kingdom.png' />
                </button>
              </li>
              <li className='flag'>
                <button onClick={this.props.pt}>
                  <img src='static/img/brazil.png' />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  }
};