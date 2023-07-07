import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`count is ${count}`)
  })
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{`count is : ${count}`}</Text>
      <View style={Styles.button}>
        <Button
          title="Increase"
          onPress={() => {
            setCount(count + 1)
          }}
        />
        <Button
          title="Decresse"
          onPress={() => {
            setCount(count - 1)
          }}
        />
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: { color: 'white', fontSize: 30 },
  button: { backgroundColor: 'red' }
})
export default Counter
