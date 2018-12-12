import React from 'react';

class Skill extends React.Component {
  render() {
    return (
      <section className="skill" id="section-skill">
        <h2 className="heading-2">What I can do</h2>
        <div className="skill__container">
          <div className="skill__working">
            <h3 className="heading-3">Working knowledge</h3>
            <ul className="skill__list">
              <li className="skill__list-item">
                <h4 className="heading-4">UI</h4>
                <div className="skill__detail">
                  <span>
                    <img src="../img/icon-sketch.svg" alt="Sketch Icon" className="brand__icon" />
                  </span>
                  <span>Sketch</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-adobephotoshop" />
                    </svg>
                  </span>
                  <span>Photoshop</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-adobeillustrator" />
                    </svg>
                  </span>
                  <span>Illustrator</span>
                </div>
              </li>
              <li className="skill__list-item">
                <h4 className="heading-4">Basic</h4>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-html5" />
                    </svg>
                  </span>
                  <span>HTML</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-visualstudiocode" />
                    </svg>
                  </span>
                  <span>Text Editor</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-git" />
                    </svg>
                  </span>
                  <span>Git</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-terminal" />
                    </svg>
                  </span>
                  <span>Terminal</span>
                </div>
              </li>
              <li className="skill__list-item">
                <h4 className="heading-4">CSS</h4>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-css3" />
                    </svg>
                  </span>
                  <span>Basic CSS</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-css3" />
                    </svg>
                  </span>
                  <span>Animation</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-css3" />
                    </svg>
                  </span>
                  <span>Flex Box</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-css3" />
                    </svg>
                  </span>
                  <span>CSS Grid</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-sass" />
                    </svg>
                  </span>
                  <span>Sass</span>
                </div>
              </li>
              <li className="skill__list-item">
                <h4 className="heading-4">JavaScript</h4>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-javascript" />
                    </svg>
                  </span>
                  <span>ES5</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-javascript" />
                    </svg>
                  </span>
                  <span>ES6</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-react" />
                    </svg>
                  </span>
                  <span>React</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-jquery" />
                    </svg>
                  </span>
                  <span>jQuery</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <img src="../img/babel.svg" alt="Babel Icon" className="brand__icon brand__icon-babel" />
                  </span>
                  <span>Babel</span>
                </div>
              </li>
              <li className="skill__list-item">
                <h4 className="heading-4">Others</h4>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-npm" />
                    </svg>
                  </span>
                  <span>npm</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-webpack" />
                    </svg>
                  </span>
                  <span>webpack</span>
                </div>
                <div className="skill__detail">
                  <span>
                    <img src="../img/icon-azure.png" alt="Azure Icon" className="brand__icon" />
                  </span>
                  <span>Microsoft Azure</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="skill__basic">
            <h3 className="heading-3">Basic knowledge</h3>
            <ul className="skill__list">
              <li className="skill__list-item">
                <h4 className="heading-4">CSS</h4>
                <div className="skill__detail">
                  <span>
                    <svg className="brand__icon">
                      <use xlinkHref="../img/sprite--2.svg#icon-bootstrap" />
                    </svg>
                  </span>
                  <span>Bootstrap</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
