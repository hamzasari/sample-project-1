import React from 'react';

import { Translate } from 'react-redux-i18n';

const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>
            <Translate value={`headerLinks.title`} />
          </strong>
          <br />
          Hamza SARI
          <br />
          2021
        </p>
      </div>
    </footer>
  );
});

export default Footer;
