import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QrCodeInformation = ({route}) => {
  const {data}=route.params
  return (
    <View>
      <Text>{data}</Text>
    </View>
  )
}

export default QrCodeInformation

const styles = StyleSheet.create({})