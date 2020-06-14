import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { loadPosts, scrollPosts } from "../redux/operations/postsOperations";
import { selectors } from "../redux/selectors/potsSelectors";
import { PostsList } from "../components/PostsList";
import { Error } from "../components/Error";

export const HomeScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Details", {
      img: post.urls.regular,
    });
  };

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (page === 1) {
      dispatch(loadPosts(page));
    } else {
      dispatch(scrollPosts(page));
    }
  }, [dispatch, page]);

  function handleLoadMore() {
    setPage((prev) => prev + 1);
  }

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await setPage(1);
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  }, [refreshing]);

  const allPosts = selectors().getPosts;
  const isLoading = selectors().isLoading;
  const isError = selectors().isError;

  return (
    <View style={styles.wrapper}>
      {!isError && (
        <PostsList
          data={allPosts}
          onOpen={openPostHandler}
          onLoadMore={handleLoadMore}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      )}
      {isLoading && (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      )}
      {isError && <Error handleLoadMore={handleLoadMore} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
});
