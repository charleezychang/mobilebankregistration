import { View, Text, StatusBar, Image, Pressable, TextInput, Alert, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import BlurCirclesBg from '../components/BlurCirclesBg'

const OtpModal = () => {
  const navigation = useNavigation()
  const [pinCode, setPinCode] = useState([])

  let myPincode = [2, 3, 4, 1]

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      // set state.isConnected to true if want to check NoConnectionScreen
      if (state.isConnected == false) {
        navigation.navigate('NoConnection')
      }
    });
    verifyOtp()
    return () => {
      unsubscribe();
    }
  }, [pinCode])

  const verifyOtp = () => {
    if (pinCode.toString() === myPincode.toString()) {
      // get JWT and:
      navigation.navigate('Home', {
        isLoggedIn: true
      })
    }
    else if (pinCode.length == 4 && pinCode.toString() !== myPincode.toString()) {
      // modal
      showAlert()

      // setIsValidPinCode(false)
    }
  }

  const addNumberToPin = (number) => {
    if (pinCode.length <= 3) {
      setPinCode(prevState => [...prevState, number])
    }
    // check if pincode is maxed
    if (pinCode.length + 1 == 4) {

    }
  }

  const deleteNumberFromPin = () => {
    if (pinCode.length != 0) {
      setPinCode((previousArr) => (previousArr.slice(0, -1)));
    }
  }

  const showAlert = () => {
    Alert.alert(
      "The pin entered is incorrect.",
      "Enter the corect pin to avoid reaching the three allowed login attempts.",
      [
        {
          text: "Okay",
          onPress: () => {
            deleteNumberFromPin()
            deleteNumberFromPin()
            deleteNumberFromPin()
            deleteNumberFromPin()
          },
          style: "cancel",
        },
      ]
    )
  }

  return (
    <SafeAreaView className='flex-1 bg-black'>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <BlurCirclesBg />
      {/* Lock Logo */}
      <View className='h-[10%] flex-row justify-center items-end'>
        <Text style={{fontFamily: "Poppins-SemiBold"}} className="text-white text-[20px]">OTP Verification</Text>
      </View>
      {/* Enter OTP */}
      <View className='h-[90%] flex-column '>
        <View className='mt-10  rounded-2xl flex-column items-center'>
          <Text className='text-[16px] text-white' style={{fontFamily: "Poppins-Regular"}}>An authentication code has been sent to</Text>
          <Text className='text-[16px] text-white' style={{fontFamily: "Poppins-Regular"}}>(+63) 915 *** 2351</Text>
          <View className='w-[100%] mt-8 mb-10 px-16 flex-row justify-center'>
            <View className={`h-[12px] w-[12px] mx-[29.5px] rounded-full ${pinCode.length >= 1 ? 'bg-[#32D74B]' : 'bg-[#1C1C1E]'}`}>
            </View>
            <View className={`h-[12px] w-[12px] mx-[29.5px] rounded-full ${pinCode.length >= 2 ? 'bg-[#32D74B]' : 'bg-[#1C1C1E]'}`}>
            </View>
            <View className={`h-[12px] w-[12px] mx-[29.5px] rounded-full ${pinCode.length >= 3 ? 'bg-[#32D74B]' : 'bg-[#1C1C1E]'}`}>
            </View>
            <View className={`h-[12px] w-[12px] mx-[29.5px] rounded-full ${pinCode.length == 4 ? 'bg-[#32D74B]' : 'bg-[#1C1C1E]'}`}>
            </View>
          </View>
          <View className='w-[100%] mt-4 flex-column items-center'>
            <View className='flex-row'>
              <Pressable
                className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-[#1C1C1E] flex-row justify-center items-center'
                onPress={() => { addNumberToPin(1) }}
              >
                <Text className='text-[32px] text-white' style={{fontFamily: "Poppins-Light"}}>1</Text>
              </Pressable>
              <Pressable
                className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-[#1C1C1E] flex-row justify-center items-center'
                onPress={() => { addNumberToPin(2) }}
              >
                <Text className='text-[32px] text-white' style={{fontFamily: "Poppins-Light"}}>2</Text>
              </Pressable>
              <Pressable
                className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-[#1C1C1E] flex-row justify-center items-center'
                onPress={() => { addNumberToPin(3) }}
              >
                <Text className='text-[32px] text-white' style={{fontFamily: "Poppins-Light"}}>3</Text>
              </Pressable>
            </View>
            <View className='flex-row'>
              <Pressable
                className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-[#1C1C1E] flex-row justify-center items-center'
                onPress={() => { addNumberToPin(4) }}
              >
                <Text className='text-[32px] text-white' style={{fontFamily: "Poppins-Light"}}>4</Text>
              </Pressable>
              <Pressable
                className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-[#1C1C1E] flex-row justify-center items-center'
                onPress={() => { addNumberToPin(5) }}
              >
                <Text className='text-[32px] text-white' style={{fontFamily: "Poppins-Light"}}>5</Text>
              </Pressable>
              <Pressable
                className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-[#1C1C1E] flex-row justify-center items-center'
                onPress={() => { addNumberToPin(6) }}
              >
                <Text className='text-[32px] text-white' style={{fontFamily: "Poppins-Light"}}>6</Text>
              </Pressable>
            </View>
            <View className='flex-row'>
              <Pressable
                className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-[#1C1C1E] flex-row justify-center items-center'
                onPress={() => { addNumberToPin(7) }}
              >
                <Text className='text-[32px] text-white' style={{fontFamily: "Poppins-Light"}}>7</Text>
              </Pressable>
              <Pressable
                className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-[#1C1C1E] flex-row justify-center items-center'
                onPress={() => { addNumberToPin(8) }}
              >
                <Text className='text-[32px] text-white' style={{fontFamily: "Poppins-Light"}}>8</Text>
              </Pressable>
              <Pressable
                className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-[#1C1C1E] flex-row justify-center items-center'
                onPress={() => { addNumberToPin(9) }}
              >
                <Text className='text-[32px] text-white' style={{fontFamily: "Poppins-Light"}}>9</Text>
              </Pressable>
            </View>
            <View className='flex-row'>
              <View className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full transparent flex-row justify-center items-center'>
              </View>
              <Pressable
                className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-[#1C1C1E] flex-row justify-center items-center'
                onPress={() => { addNumberToPin(0) }}
              >
                <Text className='text-[32px] text-white' style={{fontFamily: "Poppins-Light"}}>0</Text>
              </Pressable>
              {pinCode.length == 0 ?
                <View className=' h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full transparent flex-row justify-center items-center'>
                </View> :
                <Pressable onPress={deleteNumberFromPin} className='h-[75px] w-[75px] mx-[21.5px] my-[8px] rounded-full bg-black flex-row justify-center items-center'>
                  <Image source={require('../assets/backspacepin.png')} />
                </Pressable>}
            </View>

          </View>
        </View>
        <View className='self-center flex-row mt-8'>
          <Text className='text-white' style={{fontFamily: "Poppins-Regular"}}>I didn't receive a code. </Text>
          <Pressable ><Text className='text-green-600' style={{fontFamily: "Poppins-Regular"}}>Re-send code. </Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default OtpModal