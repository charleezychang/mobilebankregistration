import { View, Text, StatusBar, Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const InitialView = () => {
    const navigation = useNavigation()

    return (
        <View className='flex-1 bg-[#121212]'>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            {/* Company Logo */}
            <View className='h-[40%] flex-row justify-center items-end'>
                <Image source={require('../assets/splash.png')} className='h-[40%] mb-4' resizeMode='contain' />
            </View>
            {/* Prompt to Login or Register */}
            <View className='h-[60%]'>
                <View className='m-10 p-5 bg-white rounded-2xl flex-column items-center'>
                    <Text className='text-2xl font-bold'>Welcome to</Text>
                    <Text>Hello</Text>
                    <Text className='text-2xl font-bold'>Mobile Banking App</Text>
                    <Text className='text-md pt-2 text-center'>Deliver your order around the world without hesitation</Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('LoginModal')
                        }}
                        className='mt-5 bg-[#121212] w-[100%] p-3 rounded-xl flex-row justify-center items-center'>
                        <Text className='text-white text-xl'>Login</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('RegistrationModal')
                        }}
                        className='mt-2 bg-[#121212] w-[100%] p-3 rounded-xl flex-row justify-center items-center'>
                        <Text className='text-white text-xl'>Register</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default InitialView