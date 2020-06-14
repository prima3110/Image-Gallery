import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      activeOpacity={0.7}
      onPress={() => onOpen(post)}
    >
      <View style={styles.post}>
        <Image style={styles.image} source={{ uri: post.urls.small }}></Image>
        <View style={styles.textWrap}>
          <Text style={styles.title}>Author: {post.user.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    overflow: "hidden",
    height: 140,
    margin: 1,
  },
  image: {
    width: "100%",
    height: 100,
  },
  textWrap: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 2,
    height: 40,
    justifyContent: "flex-start",
  },
  title: {
    color: "#fff",
    textAlign: "center",
  },
});
