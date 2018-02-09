import React from 'react';
import { shallow } from 'enzyme';
import '../../system/setupTests';
import LoadingScreen from '../LoadingScreen';

describe('LoadingScreen', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<LoadingScreen/>);
  });

  it('should render a <div> element', () => {
    expect(renderedComponent.is('div')).toBe(true);
  });

  it('should have the correct className', () => {
    expect(renderedComponent.hasClass('loading-screen')).toBe(true);
  });
});
