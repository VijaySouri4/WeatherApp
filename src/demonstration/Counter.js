import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput
} from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('UserName')
  useEffect(() => {
    console.log(`count is ${count}`)
    name === 'UserName'
      ? console.log('name is not set')
      : console.log(`name is ${name}`)

    return () => {
      console.log('clean up')
    }
  }, [name])
  const handleChange = (text) => {
    setName(text)
  }
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.greetingsContainer}>
        <Text style={Styles.text}>{`name is : ${name}`}</Text>
      </View>
      <View style={Styles.dynamicView}>
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
        <TextInput
          placeholder="Enter Name here:"
          value={name}
          onChangeText={(text) => handleChange(text)}
        ></TextInput>
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  greetingsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: { color: 'white', fontSize: 30 },
  button: {
    backgroundColor: 'red',
    borderBottomColor: 'black',
    borderWidth: 1,
    borderRadius: 10
  },
  dynamicView: {
    flex: 1
  }
})
export default Counter
