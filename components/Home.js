import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation=useNavigation()
  const ViewTicket=useCallback(()=>{
   navigation.navigate("QrCode")
  },[])
  return (

    <View style={styles.container} >
      <TouchableOpacity onPress={ViewTicket} style={styles.Button}>
       <Text >Scan Ticket</Text> 
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  Button:{
    height:45,
    width:110,
    borderRadius:20,
    backgroundColor:"whitesmoke",
    alignItems:"center",
    justifyContent:"center"

  }
})