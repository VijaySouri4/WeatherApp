import React, { useState, useRef, useEffect, createRef } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import AppleLogin from '../components/AppleLogin'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView
      style={[
        Styles.wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={Styles.container}>
        <Feather name="sun" size={50} color="black" />
        <Text style={Styles.temp}>6</Text>
        <Text style={Styles.feels}>Feels like 5</Text>
        <RowText
          message1={'High: 8 '}
          message2={'Low: 6'}
          containerstyle={Styles.highlow}
        ></RowText>
      </View>
      <RowText
        message1={"It's Sunny"}
        message2={weatherType['Haze'].message}
        messageonestyles={Styles.description}
        messagetwostyles={Styles.message}
        containerstyle={Styles.bodywrapper}
      ></RowText>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#519671',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  highlow: {
    flexDirection: 'row'
  },
  temp: {
    color: 'black',
    fontSize: 30
  },
  feels: {
    color: 'black',
    fontSize: 20
  },
  bodywrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  description: {
    fontSize: 30
  },
  message: {
    fontSize: 20
  },
  login: {
    alignItems: 'center'
  },
  signup: {
    color: 'black',
    fontSize: 20
  },
  smallwrapper: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CurrentWeather
