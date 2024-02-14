import React from 'react';
import { shallow, render, mount } from 'enzyme';
import footer from './footer';

describe('footer', () => {
  let props;
  let shallowfooter;
  let renderedfooter;
  let mountedfooter;

  const shallowTestComponent = () => {
    if (!shallowfooter) {
      shallowfooter = shallow(<footer {...props} />);
    }
    return shallowfooter;
  };

  const renderTestComponent = () => {
    if (!renderedfooter) {
      renderedfooter = render(<footer {...props} />);
    }
    return renderedfooter;
  };

  const mountTestComponent = () => {
    if (!mountedfooter) {
      mountedfooter = mount(<footer {...props} />);
    }
    return mountedfooter;
  };  

  beforeEach(() => {
    props = {};
    shallowfooter = undefined;
    renderedfooter = undefined;
    mountedfooter = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
