import React from "react";
import { FlatList, RefreshControl } from "react-native";
import { Post } from "./Post";

export const PostsList = ({
  data = [],
  onOpen,
  onLoadMore,
  onRefresh,
  refreshing,
}) => {
  return (
    <FlatList
      data={data}
      numColumns={3}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};
