import React from 'react';

class About extends React.Component {
  render() {
    return (
      <section className="about" id="section-about">
        <h2 className="heading-2">Who I am</h2>
        <div className="about__grid">
          <div className="about__grid-time about__grid-time--1">
            1976
            <svg className="time__icon">
              <use xlinkHref="../img/sprite.svg#icon-arrow-right" />
            </svg>
          </div>
          <div className="about__grid-time about__grid-time--2">
            1999
            <svg className="time__icon">
              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
            </svg>
          </div>
          <div className="about__grid-time about__grid-time--3">
            2001
            <svg className="time__icon">
              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
            </svg>
          </div>
          <div className="about__grid-time about__grid-time--4">
            2011
            <svg className="time__icon">
              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
            </svg>
          </div>
          <div className="about__grid-time about__grid-time--5">
            2013
            <svg className="time__icon">
              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
            </svg>
          </div>
          <div className="about__grid-time about__grid-time--6">
            2015
            <svg className="time__icon">
              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
            </svg>
          </div>
          <div className="about__grid-time about__grid-time--7">2018</div>
          <div className="about__grid-item about__grid-item--1">
            <div className="about__grid-item-icon">
              <svg className="text__icon">
                <use xlinkHref="img/sprite.svg#icon-home" />
              </svg>
            </div>
            <div className="about__grid-item-text">Born</div>
          </div>
          <div className="about__grid-item about__grid-item--2">
            <div className="about__grid-item-icon">
              <svg className="text__icon">
                <use xlinkHref="img/sprite.svg#icon-book" />
              </svg>
            </div>
            <div className="about__grid-item-text">Collage Education</div>
          </div>
          <div className="about__grid-item about__grid-item--3">
            <div className="about__grid-item-icon">
              <svg className="text__icon">
                <use xlinkHref="img/sprite.svg#icon-rocket" />
              </svg>
            </div>
            <div className="about__grid-item-text">Army</div>
          </div>
          <div className="about__grid-item about__grid-item--4">
            <div className="about__grid-item-icon">
              <svg className="text__icon">
                <use xlinkHref="img/sprite.svg#icon-display" />
              </svg>
            </div>
            <div className="about__grid-item-text">MIS Job</div>
          </div>
          <div className="about__grid-item about__grid-item--5">
            <div className="about__grid-item-icon">
              <svg className="text__icon">
                <use xlinkHref="img/sprite.svg#icon-man-woman" />
              </svg>
            </div>
            <div className="about__grid-item-text">Get Married & Career Change</div>
          </div>
          <div className="about__grid-item about__grid-item--6">
            <div className="about__grid-item-icon">
              <svg className="text__icon">
                <use xlinkHref="img/sprite.svg#icon-embed2" />
              </svg>
            </div>
            <div className="about__grid-item-text">Web Front-End Job</div>
          </div>
          <div className="about__grid-item about__grid-item--7">
            <div className="about__grid-item-icon">
              <svg className="text__icon">
                <use xlinkHref="img/sprite.svg#icon-embed2" />
              </svg>
            </div>
            <div className="about__grid-item-text">Web Front-End Job</div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
