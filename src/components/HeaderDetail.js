/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

class HeaderDetail extends React.Component {
  static propTypes = {
    handleClickToHome: PropTypes.func
  }

  goToHome = () => {
    this.props.handleClickToHome();
  }

  render() {
    return (
      <header className="header header-study">
        <nav className="header__nav">
          <div className="header__nav-item">
            <a href="javascript:;" className="header__nav-link" onClick={this.goToHome}>Home</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderDetail;
