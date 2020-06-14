import React from "react";
import { StyleSheet, View, Image } from "react-native";

export const DetailsScreen = ({ route }) => {
  const postImgRegular = route.params.img;

  return (
    <View>
      <Image source={{ uri: postImgRegular }} style={styles.image} />
      <View style={styles.textWrap}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  textWrap: {
    padding: 10,
  },
});
