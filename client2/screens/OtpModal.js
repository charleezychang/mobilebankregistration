import { View, Text, StatusBar, Image, Pressable, TextInput, Alert, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import { LockClosedIcon, BackspaceIcon } from "react-native-heroicons/solid";

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
      {/* Lock Logo */}
      <View className='h-[25%] flex-row justify-center items-end'>
        <LockClosedIcon fill="white" size={70} />
      </View>
      {/* Enter OTP */}
      <View className='h-[75%] flex-column '>
        <View className='mt-10 ml-10 mr-10 p-5 bg-white rounded-2xl flex-column items-center'>
          <Text className='text-md'>An authentication code has been sent to</Text>
          <Text className='text-lg'>(+63) 915 *** 2351</Text>
          <View className='w-[100%] mt-3 px-16 flex-row justify-around'>
            <View className={`h-4 w-4 rounded-full border-black border-[1px] ${pinCode.length >= 1 && 'bg-black'}`}>
            </View>
            <View className={`h-4 w-4 rounded-full border-black border-[1px] ${pinCode.length >= 2 && 'bg-black'}`}>
            </View>
            <View className={`h-4 w-4 rounded-full border-black border-[1px] ${pinCode.length >= 3 && 'bg-black'}`}>
            </View>
            <View className={`h-4 w-4 rounded-full border-black border-[1px] ${pinCode.length == 4 && 'bg-black'}`}>
            </View>
          </View>
          <View className='w-[100%] mt-4 px-3 flex-column'>
            <View className='flex-row justify-around my-2'>
              <Pressable
                className=' h-14 w-14 rounded-full bg-gray-400 flex-row justify-center items-center'
                onPress={() => { addNumberToPin(1) }}
              >
                <Text className='text-2xl text-white'>1</Text>
              </Pressable>
              <Pressable
                className=' h-14 w-14 rounded-full bg-gray-400 flex-row justify-center items-center'
                onPress={() => { addNumberToPin(2) }}
              >
                <Text className='text-2xl text-white'>2</Text>
              </Pressable>
              <Pressable
                className=' h-14 w-14 rounded-full bg-gray-400 flex-row justify-center items-center'
                onPress={() => { addNumberToPin(3) }}
              >
                <Text className='text-2xl text-white'>3</Text>
              </Pressable>
            </View>
            <View className='flex-row justify-around my-2'>
              <Pressable
                className=' h-14 w-14 rounded-full bg-gray-400 flex-row justify-center items-center'
                onPress={() => { addNumberToPin(4) }}
              >
                <Text className='text-2xl text-white'>4</Text>
              </Pressable>
              <Pressable
                className=' h-14 w-14 rounded-full bg-gray-400 flex-row justify-center items-center'
                onPress={() => { addNumberToPin(5) }}
              >
                <Text className='text-2xl text-white'>5</Text>
              </Pressable>
              <Pressable
                className=' h-14 w-14 rounded-full bg-gray-400 flex-row justify-center items-center'
                onPress={() => { addNumberToPin(6) }}
              >
                <Text className='text-2xl text-white'>6</Text>
              </Pressable>
            </View>
            <View className='flex-row justify-around my-2'>
              <Pressable
                className=' h-14 w-14 rounded-full bg-gray-400 flex-row justify-center items-center'
                onPress={() => { addNumberToPin(7) }}
              >
                <Text className='text-2xl text-white'>7</Text>
              </Pressable>
              <Pressable
                className=' h-14 w-14 rounded-full bg-gray-400 flex-row justify-center items-center'
                onPress={() => { addNumberToPin(8) }}
              >
                <Text className='text-2xl text-white'>8</Text>
              </Pressable>
              <Pressable
                className=' h-14 w-14 rounded-full bg-gray-400 flex-row justify-center items-center'
                onPress={() => { addNumberToPin(9) }}
              >
                <Text className='text-2xl text-white'>9</Text>
              </Pressable>
            </View>
            <View className='flex-row justify-around my-2'>
              <View className=' h-14 w-14 rounded-full bg-white flex-row justify-center items-center'>
              </View>
              <Pressable
                className=' h-14 w-14 rounded-full bg-gray-400 flex-row justify-center items-center'
                onPress={() => { addNumberToPin(0) }}
              >
                <Text className='text-2xl text-white'>0</Text>
              </Pressable>
              {pinCode.length == 0 ?
                <View className=' h-14 w-14 rounded-full bg-white flex-row justify-center items-center'>
                </View> :
                <Pressable onPress={deleteNumberFromPin} className='h-14 w-14 rounded-full white flex-row justify-center items-center'>
                  <BackspaceIcon fill="#9CA3AF" size={45} />
                </Pressable>}
            </View>

          </View>
        </View>
        <View className='self-center flex-row mt-4'>
          <Text className='text-white'>I didn't receive a code. </Text>
          <Pressable ><Text className='text-green-600'>Re-send code. </Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default OtpModal