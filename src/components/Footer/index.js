import React from 'react';
import { Translate } from 'react-redux-i18n';

/**
 * Footer component
 * This component is shown at the bottom of all pages
 * @returns {JSX.Element}
 */
const Footer = () => {
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
};

export default Footer;
