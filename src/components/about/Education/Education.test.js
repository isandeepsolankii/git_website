import React from "react";
import { shallow, render, mount } from "enzyme";
import education from "./education";

describe("education", () => {
  let props;
  let shalloweducation;
  let renderededucation;
  let mountededucation;

  const shallowTestComponent = () => {
    if (!shalloweducation) {
      shalloweducation = shallow(<education {...props} />);
    }
    return shalloweducation;
  };

  const renderTestComponent = () => {
    if (!renderededucation) {
      renderededucation = render(<education {...props} />);
    }
    return renderededucation;
  };

  const mountTestComponent = () => {
    if (!mountededucation) {
      mountededucation = mount(<education {...props} />);
    }
    return mountededucation;
  };

  beforeEach(() => {
    props = {};
    shalloweducation = undefined;
    renderededucation = undefined;
    mountededucation = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});
