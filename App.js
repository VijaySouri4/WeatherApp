import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";

const App = () => {
  return (
    <View style={Styles.container}>
      <UpcomingWeather />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
