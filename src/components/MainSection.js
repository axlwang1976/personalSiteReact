import React from 'react';
import PropTypes from 'prop-types';
import About from './About';
import Skill from './Skill';
import Work from './Work';
import Contact from './Contact';

class MainSection extends React.Component {
  static propTypes = {
    addContact: PropTypes.func
  }

  render() {
    return (
      <main>
        <About />
        <Skill />
        <Work />
        <Contact addContact={this.props.addContact} />
      </main>
    );
  }
}

export default MainSection;
