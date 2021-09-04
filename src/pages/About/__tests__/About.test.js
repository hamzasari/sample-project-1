import React from 'react';
import renderer from 'react-test-renderer';
import About from '../index';

it('renders About snapshot', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
