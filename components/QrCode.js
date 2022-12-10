

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window')

export default function QrCode() {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();
  const navigation=useNavigation()

  useEffect(() => {
    (async() => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    (
      scanData&& 
      navigation.navigate("QrCodeInformation",
      {
        data:scanData
      }
      )
    )
  }, [scanData]);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({type, data}) => {
    setScanData(data);
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner 
        style={{height:width,width:height}}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        />
      {/* {scanData && <QRCodeInformation data={scanData}/>
      } */}
      
     
      <StatusBar style="auto" />
    </View>
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
