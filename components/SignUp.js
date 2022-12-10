import { Dimensions, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  inner: {
    paddingVertical:10 ,
    // flex: 1,
    display: 'flex',
    justifyContent:'center',
  },
  textInput: {
    height: 50,
    borderColor: '#000000',
    width:width-100,
    borderWidth: 1,
    borderRadius:5,
    paddingHorizontal:10,
    position:'relative',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Caption:{
    fontSize:20,
    fontWeight:"700",
    fontStyle:"italic",
    marginTop:-20
  }
})
const SignUp = () => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState();

  const navigation=useNavigation()
  let headers = {
    headers: {
        // 'Accept': 'application/json',
        // 'Content-Type': 'multipart/form-data'
    }

}
  const Submit=useCallback(async()=>{
    try {
      const res = await axios.post(`http://192.168.0.106:5001/Checker`,{name:name,pin:pin,})
      AsyncStorage.setItem("token",res.data.token)
    } catch(err) {
      console.log(err.message);
    }
  },[])
  const Goto=useCallback(()=>{
     navigation.navigate("SignIn")
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.Caption}>Eticket</Text>

    <Pressable onPress={Keyboard.dismiss}>
    <View style={styles.inner}>
      <View style={{paddingBottom:15}}>
      <Text> Username </Text>
    <TextInput placeholder='UserName...' 
    onChangeText={(text)=>setName(text)}
    style={styles.textInput} />
      </View>
  <View>
        </View>
    <View style={{paddingTop:15}}>
         <Text style={{marginTop:10}}>Pin Code </Text>
    <TextInput 
      onChangeText={(text)=>setPin(text)}
      placeholder='Pin Code...'
      secureTextEntry={true}
      keyboardType="numeric"
       style={styles.textInput} />
    </View>
    <TouchableOpacity onPress={Submit}>
    <Text style={{alignSelf:"center",marginTop:15,borderWidth:1,paddingHorizontal:20,borderRadius:8,paddingVertical:9}} >Submit</Text>
    </TouchableOpacity>
    </View>

    </Pressable>
    <View style={{display:"flex",alignItems:"center",flexDirection:"row",alignSelf:"center"}}>
      <Text  style={{alignSelf:"center"}}>Already have an account</Text> 
      <Text onPress={Goto} style={{marginLeft:10,fontWeight:"800"}}>Sign In</Text>
      </View>
    </View>
  )
}

export default SignUp

