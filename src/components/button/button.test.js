import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import SharedButton from "./index";

describe("SharedButton Component", () => {
  describe("Checking Proptypes", () => {
    it("does not throw warning with expected props", () => {
      let result = checkProps(SharedButton, { buttonText: "Text" });
      expect(result).toBeUndefined();
      result = checkProps(SharedButton, { buttonText: 1 });
      expect(result).toBe(
        "Failed props type: Invalid props `buttonText` of type `number` supplied to `SharedButton`, expected `string`."
      );
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Button",
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
