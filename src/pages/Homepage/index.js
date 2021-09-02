import React from 'react';

import { Translate } from 'react-redux-i18n';

import './style.sass';

import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png';

const Homepage = React.memo(() => {
  return (
    <div className={`page-content-container`}>
      <h2 className={`title is-2`}>
        <Translate value={`headerLinks.homepage`} />
      </h2>
      <div className={`content-row`}>
        <div className={`content-image-div`}>
          <img src={pic1} alt={`picture1`} />
        </div>
        <div className={`content-text`}>
          <Translate value={`pageContent.content1`} />
        </div>
      </div>
      <div className={`content-row`}>
        <div className={`content-text`}>
          <Translate value={`pageContent.content2`} />
        </div>
        <div className={`content-image-div`}>
          <img src={pic2} alt={`picture2`} />
        </div>
      </div>
      <div className={`content-row`}>
        <div className={`content-image-div`}>
          <img src={pic3} alt={`picture3`} />
        </div>
        <div className={`content-text`}>
          <Translate value={`pageContent.content3`} />
        </div>
      </div>
    </div>
  );
});

export default Homepage;
