import { combineReducers } from "redux";
import postsReducer from "./reducers/postsReducers";

const rootReducer = combineReducers({
  imageGallery: postsReducer,
});

export default rootReducer;
