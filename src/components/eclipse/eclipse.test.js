import React from 'react';
import { shallow, render, mount } from 'enzyme';
import eclipse from './eclipse';

describe('eclipse', () => {
  let props;
  let shalloweclipse;
  let renderedeclipse;
  let mountedeclipse;

  const shallowTestComponent = () => {
    if (!shalloweclipse) {
      shalloweclipse = shallow(<eclipse {...props} />);
    }
    return shalloweclipse;
  };

  const renderTestComponent = () => {
    if (!renderedeclipse) {
      renderedeclipse = render(<eclipse {...props} />);
    }
    return renderedeclipse;
  };

  const mountTestComponent = () => {
    if (!mountedeclipse) {
      mountedeclipse = mount(<eclipse {...props} />);
    }
    return mountedeclipse;
  };  

  beforeEach(() => {
    props = {};
    shalloweclipse = undefined;
    renderedeclipse = undefined;
    mountedeclipse = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
