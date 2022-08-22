import { View, Text, StatusBar, Image, Pressable, TextInput, Alert, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import { ShieldCheckIcon } from "react-native-heroicons/solid";

const SuccessRegModal = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      // set state.isConnected to true if want to check NoConnectionScreen
      if (state.isConnected == false) {
        navigation.navigate('NoConnection')
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-black'>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View className='h-[30%] flex-row justify-center items-end'>
        <ShieldCheckIcon fill="white" size={70} />
      </View>
      <View className='h-[70%] flex-column '>
        <View className='mt-10 ml-10 mr-10 p-5 bg-white rounded-2xl flex-column items-center'>
          <Text className='text-2xl text-center'>Account Created!</Text>
          <Text className='text-xl mt-3 w-[100%] text-center'>Your account had been created successfully.</Text>
          <Text className='text-xl w-[100%] text-center'>Please sign in to use your account and enjoy.</Text>

          <Pressable
            onPress={() => {
              navigation.navigate('Login')
            }}
            className='mt-4 bg-black w-[100%] p-3 rounded-xl flex-row justify-center items-center'>
            <Text className='text-white text-xl font-bold'>SIGN IN</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SuccessRegModal