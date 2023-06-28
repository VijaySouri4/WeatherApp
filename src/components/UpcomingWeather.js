import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Text>UpcomingWeather</Text>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default UpcomingWeather;
