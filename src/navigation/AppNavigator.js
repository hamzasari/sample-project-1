import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NavigationRoutes from './NavigationRoutes';

// screens
import Homepage from '../pages/Homepage';
import ContactUs from '../pages/ContactUs';

/**
 * Create react navigation routers
 * @returns {JSX.Element}
 */
const AppNavigator = () => (
  <>
    <Route
      exact
      path={NavigationRoutes.homepage}
      component={withRouter(Homepage)}
    />
    <Route
      exact
      path={NavigationRoutes.contactUs}
      component={withRouter(ContactUs)}
    />
  </>
);

export default AppNavigator;
