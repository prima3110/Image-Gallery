import { combineReducers } from "redux";
import * as types from "../types/postsTypes";

const posts = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.payload.data;

    case types.SCROLL_POSTS_SUCCESS:
      return [...state, ...action.payload.data];

    default:
      return state;
  }
};

const isError = (state = null, action) => {
  switch (action.type) {
    case types.LOAD_POSTS_ERROR:
    case types.SCROLL_POSTS_ERROR:
      return action.payload.error;

    case types.LOAD_POSTS_START:
    case types.SCROLL_POSTS_START:
      return null;

    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_POSTS_START:
    case types.SCROLL_POSTS_START:
      return true;

    case types.LOAD_POSTS_SUCCESS:
    case types.SCROLL_POSTS_SUCCESS:
    case types.LOAD_POSTS_ERROR:
    case types.SCROLL_POSTS_ERROR:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  posts,
  isError,
  isLoading,
});
