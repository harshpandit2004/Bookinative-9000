import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../Utils/Button'

export default function Recommendation(props) {
  return (
    <View>
        <Text>Recommendation</Text>
        <Button pressHandler={props.backhandler}>back</Button>
    </View>
  )
}
