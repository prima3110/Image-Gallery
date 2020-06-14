import * as actions from "../actions/postsActions";
import * as API from "../../services/api";

export const loadPosts = (page) => (dispatch) => {
  dispatch(actions.loadPostsStart());
  API.getPosts(page)
    .then((data) => {
      dispatch(actions.loadPostsSuccess(data));
    })
    .catch((err) => dispatch(actions.loadPostsError(err)));
};

export const scrollPosts = (page) => (dispatch) => {
  dispatch(actions.scrollPostsStart());
  API.getPosts(page)
    .then((data) => {
      dispatch(actions.scrollPostsSuccess(data));
    })
    .catch((err) => dispatch(actions.scrollPostsError(err)));
};
