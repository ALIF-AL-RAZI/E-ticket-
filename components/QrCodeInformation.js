import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QrCodeInformation = ({route}) => {
  const {data}=route.params
  return (
    <View style={styles.container}>
      <Text style={styles.Ticket}>Bus Name: Bkash</Text>
      <Text style={styles.Ticket}>Departure: Mirpur 10</Text>
      <Text style={styles.Ticket}>Destination: Mirpur 11</Text>
      <Text style={styles.Ticket}>Bus Fare: 10 Taka</Text>


    </View>
  )
}

export default QrCodeInformation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  Ticket:{
    fontSize:18,
    fontWeight:"600",
    marginTop:8
  }
})