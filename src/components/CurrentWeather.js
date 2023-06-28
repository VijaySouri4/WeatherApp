import React, { useState, useRef, useEffect, createRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Switch,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Vibration,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const CurrentWeather = () => {
  return (
    <SafeAreaView style={Styles.wrapper}>
      <Text>WeatherApp</Text>
      <View style={Styles.container}>
        <Feather name="sun" size={50} color="black" />
        <Text style={Styles.temp}>6</Text>
        <Text style={Styles.feels}>Feels like 5</Text>
        <View style={Styles.highlow}>
          <Text>High: 8 </Text>
          <Text>Low: 6</Text>
        </View>
      </View>
      <View style={Styles.bodywrapper}>
        <Text style={Styles.description}>It's Sunny</Text>
        <Text style={Styles.message}>It's perfect T-shirt weather</Text>
      </View>
      <View style={Styles.smallwrapper}>
        <Text style={Styles.login}>Login </Text>
        <Text style={Styles.signup}>SignUp</Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#519671",
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  highlow: {
    flexDirection: "row",
  },
  temp: {
    color: "black",
    fontSize: 30,
  },
  feels: {
    color: "black",
    fontSize: 20,
  },
  bodywrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  description: {
    fontSize: 30,
  },
  message: {
    fontSize: 20,
  },
  login: {
    color: "black",
    fontSize: 20,
  },
  signup: {
    color: "black",
    fontSize: 20,
  },
  smallwrapper: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CurrentWeather;
