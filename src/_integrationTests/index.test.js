import React from "react";
import { shallow } from "enzyme";
import moxios from "moxios";
import { testStore } from "./../../utils";
import fetchPosts from "../actions";

describe("fetchPosts Action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("Store is updated correctly", () => {
    const expectedState = [
        { title: "Example Title 1", body: "Some text" },
        { title: "Example Title 2", body: "Some text" },
        { title: "Example Title 3", body: "Some text" },
        { title: "Example Title 4", body: "Some text" }
      ];
    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });
    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expectedState(newState.posts).toBe(expectedState);
    });
  });
});
