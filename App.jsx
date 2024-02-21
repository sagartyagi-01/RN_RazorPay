import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import * as constants from './src/constants';

const App = () => {

  const handlePayment = () => {

    RazorpayCheckout.open(constants.options).then((data) => {
      // handle success
      // data will be having razorpay_payment_id and success code
      console.log(`Success: ${data.razorpay_payment_id}`);
      Alert.alert(`Thank you for purchase`);
    })
      .catch((error) => {
        // handle failure
        //Error will be having code, description, user details,error code,description reason etc
        console.log(error)
        console.log(`Error: ${error.code} | ${error.description}`);
      Alert.alert(`${error.description}`);

      })
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: constants.sampleImg }} style={styles.img} />
      <Pressable style={styles.btn} onPress={handlePayment}>
        <Text>{`Buy at ${constants.amount}`}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    height: 200,
    width: 200
  },
  btn: {
    borderWidth: 2,
    borderColor: '#000',
    width: 100,
    padding: 2,
    backgroundColor: 'orange',
    margin: 20,
  }
})

export default App