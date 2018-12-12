/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

class HeaderStudy extends React.Component {
  static propTypes = {
    handleClickToHome: PropTypes.func
  }

  goToHome = () => {
    this.props.handleClickToHome();
  }

  render() {
    return (
      <header className="header">
        <div className="bg-video bg-study" />
        <nav className="header__nav">
          <div className="header__nav-item">
            <a href="javascript:;" className="header__nav-link" onClick={this.goToHome}>Home</a>
          </div>
        </nav>
        <div className="header__content">
          <div className="header__content-logo">
            <img src="../img/logo.svg" alt="Site Logo" className="header__content-img" />
          </div>
          <h1 className="heading-1 heading-tc">學無止境，前端尤甚，在這邊紀錄自己前端學習的筆記，一方面提醒自己，一方面加深印象</h1>
        </div>
      </header>
    );
  }
}

export default HeaderStudy;
