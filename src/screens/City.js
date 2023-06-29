import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'

const City = () => {
  const {
    container,
    imagelayout,
    city,
    country,
    cityText,
    populationWrapper,
    populationText,
    risesettext,
    risesetwrapper,
    rowLayout
  } = Styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city_background.jpg')}
        style={imagelayout}
      >
        <Text style={[city, cityText]}>Boston</Text>
        <Text style={[country, cityText]}>USA</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'blue'}
            bodyText={'8000'}
            bodyTextStyles={Styles.populationText}
          ></IconText>
        </View>
        <View style={[risesetwrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'black'}
            bodyText={'05:30:12Am'}
            bodyTextStyles={Styles.risesettext}
          ></IconText>
          <IconText
            iconName={'sunset'}
            iconColor={'black'}
            bodyText={'17:30:12Pm'}
            bodyTextStyles={Styles.risesettext}
          ></IconText>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: 'skyblue'
  },
  imagelayout: {
    flex: 1
  },
  city: {
    fontSize: 40
  },
  country: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'blue'
  },
  risesetwrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  risesettext: {
    fontSize: 20,
    color: 'black'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default City
