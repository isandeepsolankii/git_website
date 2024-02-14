import React from 'react';
import { shallow, render, mount } from 'enzyme';
import about from './about';

describe('about', () => {
  let props;
  let shallowabout;
  let renderedabout;
  let mountedabout;

  const shallowTestComponent = () => {
    if (!shallowabout) {
      shallowabout = shallow(<about {...props} />);
    }
    return shallowabout;
  };

  const renderTestComponent = () => {
    if (!renderedabout) {
      renderedabout = render(<about {...props} />);
    }
    return renderedabout;
  };

  const mountTestComponent = () => {
    if (!mountedabout) {
      mountedabout = mount(<about {...props} />);
    }
    return mountedabout;
  };  

  beforeEach(() => {
    props = {};
    shallowabout = undefined;
    renderedabout = undefined;
    mountedabout = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
