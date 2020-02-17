import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "../../actions/types";

let initialState = {
  postsLoading: false,
  postsError: "",
  posts: []
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        postsLoading: true,
        postsError: "",
        posts: []
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        postsError: "",
        posts: payload
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        postsLoading: false,
        postsError: "There was a problem getting your posts.",
        posts: []
      };

    default:
      return state;
  }
};

export default postReducer;
