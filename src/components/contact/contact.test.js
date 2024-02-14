import React from 'react';
import { shallow, render, mount } from 'enzyme';
import contact from './contact';

describe('contact', () => {
  let props;
  let shallowcontact;
  let renderedcontact;
  let mountedcontact;

  const shallowTestComponent = () => {
    if (!shallowcontact) {
      shallowcontact = shallow(<contact {...props} />);
    }
    return shallowcontact;
  };

  const renderTestComponent = () => {
    if (!renderedcontact) {
      renderedcontact = render(<contact {...props} />);
    }
    return renderedcontact;
  };

  const mountTestComponent = () => {
    if (!mountedcontact) {
      mountedcontact = mount(<contact {...props} />);
    }
    return mountedcontact;
  };  

  beforeEach(() => {
    props = {};
    shallowcontact = undefined;
    renderedcontact = undefined;
    mountedcontact = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
