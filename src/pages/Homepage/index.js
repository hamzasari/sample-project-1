import React from 'react';

import { Translate } from 'react-redux-i18n';

const Homepage = () => {
  return (
    <div className={`page-content-container`}>
      <h2 className={`title is-2`}>
        <Translate value={`headerLinks.homepage`} />
      </h2>
      <p>
        <Translate value={`pageContent.homepage`} />
      </p>
      <br />
      <p>
        <Translate value={`pageContent.homepage1`} />
      </p>
      <br />
      <p>
        <Translate value={`pageContent.homepage2`} />
      </p>
    </div>
  );
};

export default Homepage;
