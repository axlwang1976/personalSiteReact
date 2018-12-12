/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import BgVideo from './BgVideo';

class Header extends React.Component {
  static propTypes = {
    handleClickToStudy: PropTypes.func
  }

  goToStusy = () => {
    this.props.handleClickToStudy();
  }

  render() {
    return (
      <header className="header">
        <div className="bg-video">
          <BgVideo />
        </div>
        <nav className="header__nav">
          <div className="header__nav-item">
            <a href="#section-about" className="header__nav-link">About</a>
          </div>
          <div className="header__nav-item">
            <a href="#section-skill" className="header__nav-link">Skills</a>
          </div>
          <div className="header__nav-item">
            <a href="#section-work" className="header__nav-link">Works</a>
          </div>
          <div className="header__nav-item">
            <a href="#section-contact" className="header__nav-link">Contact</a>
          </div>
          <div className="header__nav-item">
            <a href="javascript:;" className="header__nav-link" onClick={this.goToStusy}>Study</a>
          </div>
        </nav>
        <div className="header__content">
          <div className="header__content-logo">
            <img src="../img/logo.svg" alt="Site Logo" className="header__content-img" />
          </div>
          <h1 className="heading-1">A <span className="heading-1__span">middle aged man</span> who try to figure <span className="heading-1__span">front-end</span>web development out more</h1>
        </div>
      </header>
    );
  }
}

export default Header;
