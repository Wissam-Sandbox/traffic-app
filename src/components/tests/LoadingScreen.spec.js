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

  it('should contain the animated element', () => {
    expect(
      renderedComponent.containsMatchingElement(
        <div className="spinner">
          <div className="bounce bounce1" />
          <div className="bounce bounce2" />
          <div className="bounce" />
        </div>
      )
    ).toBe(true);
  });
});
