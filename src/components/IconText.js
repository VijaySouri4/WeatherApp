import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props
  return (
    <View style={Styles.container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[Styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}
const Styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold'
  },
  container: {
    alignItems: 'center'
  }
})
export default IconText
