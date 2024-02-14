import React from 'react';
import { shallow, render, mount } from 'enzyme';
import social from './social';

describe('social', () => {
  let props;
  let shallowsocial;
  let renderedsocial;
  let mountedsocial;

  const shallowTestComponent = () => {
    if (!shallowsocial) {
      shallowsocial = shallow(<social {...props} />);
    }
    return shallowsocial;
  };

  const renderTestComponent = () => {
    if (!renderedsocial) {
      renderedsocial = render(<social {...props} />);
    }
    return renderedsocial;
  };

  const mountTestComponent = () => {
    if (!mountedsocial) {
      mountedsocial = mount(<social {...props} />);
    }
    return mountedsocial;
  };  

  beforeEach(() => {
    props = {};
    shallowsocial = undefined;
    renderedsocial = undefined;
    mountedsocial = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
