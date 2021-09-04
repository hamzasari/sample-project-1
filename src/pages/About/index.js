import React from 'react';
import { Translate } from 'react-redux-i18n';

/**
 * About page
 * @returns {JSX.Element}
 */
const About = () => {
  return (
    <div className={`about-page-content-container`}>
      <h2 className={`title is-2`}>
        <Translate value={`headerLinks.about`} />
      </h2>
      <div className={`about-content-text`}>
        <Translate value={`pageContent.content1`} />
      </div>
      <div className={`about-content-text`}>
        <Translate value={`pageContent.content2`} />
      </div>
      <div className={`about-content-text`}>
        <Translate value={`pageContent.content3`} />
      </div>
    </div>
  );
};

export default About;
