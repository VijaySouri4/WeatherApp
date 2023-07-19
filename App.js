import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'

const App = () => {
  const [isLoading, errorMsg, weather] = useGetWeather()

  if (weather) {
    console.log(weather)
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="green" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center'
  }
})
export default App
