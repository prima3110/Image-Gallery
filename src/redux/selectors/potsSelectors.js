import { useSelector } from "react-redux";

export const selectors = () => {
  const getPosts = useSelector((store) => store.imageGallery.posts);
  const isLoading = useSelector((state) => state.imageGallery.isLoading);
  const isError = useSelector((state) => state.imageGallery.isError);

  return {
    getPosts,
    isLoading,
    isError,
  };
};
