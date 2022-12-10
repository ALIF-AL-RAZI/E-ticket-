import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrCode from './components/QrCode';
import QrCodeInformation from './components/QrCodeInformation';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const Stack=createNativeStackNavigator()

  const app=AsyncStorage.getItem("token")
  return (
    <NavigationContainer>
    {
      app?
      <Stack.Navigator >
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='QrCode' component={QrCode}/>
        <Stack.Screen name='QrCodeInformation' component={QrCodeInformation}/>
      </Stack.Navigator>
      :
      <Stack.Navigator >
      <Stack.Screen name='SignUp' options={{headerShown:false}} component={SignUp}/>
      <Stack.Screen name='SignIn' options={{headerShown:false}} component={SignIn}/>

    </Stack.Navigator>
    }
    <StatusBar  />
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
});
