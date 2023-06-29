import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { temp, item, date } = Styles
  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color={'white'}></Feather>
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'magenta'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  }
})

export default ListItem
