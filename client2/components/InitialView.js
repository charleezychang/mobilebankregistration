import { View, Text, StatusBar, Image, Pressable, Platform, StyleSheet, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import BlurCirclesBg from './BlurCirclesBg'

const InitialView = (props) => {
    const navigation = useNavigation()

    return (
        <View className='flex-1 bg-black flex-column items-center'>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            {/* Background radial blurs */}
            <BlurCirclesBg />
            {/* Company Logo */}
            <View className='h-[40%] flex-row justify-center items-end w-[100%]'>
                <Image source={require('../assets/splash.png')} className='h-[40%] mb-4' resizeMode='contain' />
            </View>
            {/* Prompt to Login or Register */}
            <View className={`h-[60%] ${Platform.OS === 'web' && 'w-[30%]'}`} >
                <View className='m-10 p-5 bg-white rounded-2xl flex-column items-center'>
                    <Text className='text-2xl font-bold'>Welcome to</Text>
                    <Text className='text-2xl font-bold'>Mobile Banking App</Text>
                    <Text className='text-md pt-2 text-center'>Deliver your order around the world without hesitation</Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('LoginModal')
                        }}
                        className='mt-5 w-[100%] bg-[#1C1C1E] p-3 rounded-xl flex-row justify-center items-center'
                    // style={{
                    //     background: "linear-gradient(71.48deg, #FFD60A 0%, #32D74B 62.9%)",
                    //     borderRadius: "12px"
                    // }}
                    >

                        <Text className='text-white text-xl'>Login</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('RegistrationModal')
                        }}
                        className='mt-2 bg-[#1C1C1E] w-[100%] p-3 rounded-xl flex-row justify-center items-center'>
                        <Text className='text-white text-xl'>Register</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default InitialView