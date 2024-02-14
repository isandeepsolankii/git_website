import React from 'react';
import { shallow, render, mount } from 'enzyme';
import project from './project';

describe('project', () => {
  let props;
  let shallowproject;
  let renderedproject;
  let mountedproject;

  const shallowTestComponent = () => {
    if (!shallowproject) {
      shallowproject = shallow(<project {...props} />);
    }
    return shallowproject;
  };

  const renderTestComponent = () => {
    if (!renderedproject) {
      renderedproject = render(<project {...props} />);
    }
    return renderedproject;
  };

  const mountTestComponent = () => {
    if (!mountedproject) {
      mountedproject = mount(<project {...props} />);
    }
    return mountedproject;
  };  

  beforeEach(() => {
    props = {};
    shallowproject = undefined;
    renderedproject = undefined;
    mountedproject = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
