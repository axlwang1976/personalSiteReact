import React from 'react';
import StudyES6 from './StudyES6';

class MainStudy extends React.Component {
  render() {
    return (
      <main>
        <section className="work study">
          <h2 className="heading-2 heading-tc">筆記列表</h2>
          <StudyES6 />
        </section>
      </main>
    );
  }
}

export default MainStudy;
