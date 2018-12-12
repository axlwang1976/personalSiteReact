import React from 'react';
import { Redirect } from 'react-router';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import base from '../base';

class App extends React.Component {
  state = {
    contactForms: {},
    referrer: null
  }

  componentDidMount() {
    this.ref = base.syncState('/contactForms', {
      context: this,
      state: 'contactForms'
    });
  }

  handleClickToStudy = () => {
    this.setState({ referrer: '/study' });
  }

  addContact = singleContact => {
    const contactForms = { ...this.state.contactForms };
    contactForms[`contactForm${Date.now()}`] = singleContact;
    this.setState({ contactForms });
  }

  render() {
    const { referrer } = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return (
      <React.Fragment>
        <Header handleClickToStudy={this.handleClickToStudy} />
        <MainSection addContact={this.addContact} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
