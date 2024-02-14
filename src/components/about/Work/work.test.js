import React from "react";
import { shallow, render, mount } from "enzyme";
import work from "./Work";

describe("work", () => {
  let props;
  let shallowwork;
  let renderedwork;
  let mountedwork;

  const shallowTestComponent = () => {
    if (!shallowwork) {
      shallowwork = shallow(<work {...props} />);
    }
    return shallowwork;
  };

  const renderTestComponent = () => {
    if (!renderedwork) {
      renderedwork = render(<work {...props} />);
    }
    return renderedwork;
  };

  const mountTestComponent = () => {
    if (!mountedwork) {
      mountedwork = mount(<work {...props} />);
    }
    return mountedwork;
  };

  beforeEach(() => {
    props = {};
    shallowwork = undefined;
    renderedwork = undefined;
    mountedwork = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});
