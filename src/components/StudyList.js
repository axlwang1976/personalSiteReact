import React from 'react';
import { Redirect } from 'react-router';
import HeaderStudy from './HeaderStudy';
import MainStudy from './MainStudy';
import Footer from './Footer';

class StudyList extends React.Component {
  state = {
    referrer: null
  }

  handleClickToHome = () => {
    this.setState({ referrer: '/' });
  }

  render() {
    const { referrer } = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return (
      <React.Fragment>
        <HeaderStudy handleClickToHome={this.handleClickToHome} />
        <MainStudy />
        <Footer />
      </React.Fragment>
    );
  }
}

export default StudyList;
