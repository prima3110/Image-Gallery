import * as types from "../types/postsTypes";

//on load actions

export const loadPostsStart = () => ({
  type: types.LOAD_POSTS_START,
});

export const loadPostsSuccess = (data) => ({
  type: types.LOAD_POSTS_SUCCESS,
  payload: {
    data,
  },
});

export const loadPostsError = (error) => ({
  type: types.LOAD_POSTS_ERROR,
  payload: { error },
});

//on scroll actions

export const scrollPostsStart = () => ({
  type: types.SCROLL_POSTS_START,
});

export const scrollPostsSuccess = (data) => ({
  type: types.SCROLL_POSTS_SUCCESS,
  payload: {
    data,
  },
});

export const scrollPostsError = (error) => ({
  type: types.SCROLL_POSTS_ERROR,
  payload: { error },
});
