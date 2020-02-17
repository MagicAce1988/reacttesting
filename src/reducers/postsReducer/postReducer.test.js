import postReducer from "./postReducer";
import { GET_POSTS } from "../../actions/types";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual({
      postsLoading: false,
      postsError: "",
      posts: []
    });
  });

  it("Should return new state if receiving type", () => {
    const posts = [
      { title: "Test 1" },
      { title: "Test 2" },
      { title: "Test 3" }
    ];

    const newState = postReducer(
      {},
      {
        type: GET_POSTS,
        payload: posts
      }
    );

    expect(newState).toEqual({
      postsLoading: true,
      postsError: "",
      posts: []
    });
  });
});
