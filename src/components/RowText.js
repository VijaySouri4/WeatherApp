import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RowText = (props) => {
  const {
    message1,
    message2,
    messageonestyles,
    messagetwostyles,
    containerstyle
  } = props
  return (
    <View style={containerstyle}>
      <Text style={messageonestyles}>{message1}</Text>
      <Text style={messagetwostyles}>{message2}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  description: {
    fontSize: 30
  },
  message: {
    fontSize: 20
  }
})
export default RowText
