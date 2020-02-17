import axios from "axios";
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from './types';

const fetchPostsRequest = () => ({ type: GET_POSTS });
const fetchPostsSuccess = data => ({ type: GET_POSTS_SUCCESS, payload: data });
const fetchPostsFailure = () => ({ type: GET_POSTS_FAILURE });

const fetchPosts = () => dispatch => {
    dispatch(fetchPostsRequest());
    axios
      .get("http://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(response => {
        const data = response.data;
        dispatch(fetchPostsSuccess(data));
      })
      .catch(() => {
        dispatch(fetchPostsFailure());
      });
      return [];
  };

export default fetchPosts;
