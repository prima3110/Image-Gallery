import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { HomeScreen } from "./src/screens/HomeScreen";
import { DetailsScreen } from "./src/screens/DetailsScreen";
import { THEME } from "./src/theme";
import store from "./src/redux/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
            },
            headerTintColor:
              Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Image Gallery",
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={() => ({
              title: "Back to home page",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
