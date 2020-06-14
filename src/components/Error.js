import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const Error = ({ handleLoadMore }) => {
  return (
    <View style={styles.error}>
      <Text style={styles.text}>Something went wrong... Please try again!</Text>
      <Button
        title="Try again"
        onPress={() => {
          handleLoadMore();
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
