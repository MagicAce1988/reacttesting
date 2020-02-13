import { GET_POSTS } from "./posts.actionTypes";

const initialState = {
  posts: []
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        posts: payload,
        ...state
      };

    default:
      return state;
  }
};

export default postReducer;
