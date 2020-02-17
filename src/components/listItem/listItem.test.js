import React from "react";
import { shallow } from "enzyme";
import ListItem from ".";
import { findByTestAtrr, checkProps } from "../../../utils";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Title",
        desc: "Description"
      };
      let propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Title",
        desc: "Description"
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("Should render without error", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });
    it("Should render a title", () => {
      const title = findByTestAtrr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("Should render a description", () => {
      const description = findByTestAtrr(wrapper, "componentDescription");
      expect(description.length).toBe(1);
    });
  });

  describe("Component should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Description"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should not render", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
