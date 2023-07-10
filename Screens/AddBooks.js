import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../Utils/Button'

export default function AddBooks(props) {
  return (
    <View>
        <Text>Add Books</Text>
        <Button pressHandler={props.backhandler}>back</Button>
    </View>
  )
}
