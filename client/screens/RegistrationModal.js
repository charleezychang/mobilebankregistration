import { View, Text, StatusBar, Image, Pressable, TextInput, Alert, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import CheckBox from 'expo-checkbox';
import { NewspaperIcon } from "react-native-heroicons/solid";

const RegistrationModal = () => {

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
        <SafeAreaView className='flex-1 bg-[#121212]'>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            {/* Company Logo */}
            <View className='h-[25%] flex-row justify-center items-end'>
                <NewspaperIcon fill="white" size={70} />
            </View>
            {/* Prompt to Login or Register */}
            <View className='h-[75%] flex-column '>
                <View className='mt-10 ml-10 mr-10 p-5 bg-white rounded-2xl flex-column items-center'>
                    <TextInput
                        placeholder='Full Name'
                        className=' border-b-2 text-xl w-[100%] p-1 mt-2'
                    // className={`text-xl w-[100%] p-1 border-b-2 ${!isValidEmail && 'border-b-red-500'}`}
                    // onEndEditing={(event) => {
                    //     emailValidation(event.nativeEvent.text)
                    //     setEmail(event.nativeEvent.text)
                    //     if (rememberMe.toString() === "true") {
                    //         storeData('emailstorage', event.nativeEvent.text)
                    //     }
                    // }}
                    />
                    {/* {!isValidEmail && <TextInput className='self-start text-red-500'>Invalid email address</TextInput>} */}
                    <TextInput
                        placeholder='Phone Number'
                        className=' border-b-2 text-xl w-[100%] p-1 mt-2'
                    />
                    <TextInput
                        placeholder='Email Address'
                        className=' border-b-2 text-xl w-[100%] p-1 mt-2'
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Password'
                        className=' border-b-2 text-xl w-[100%] p-1 mt-2'
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Confirm Password'
                        className=' border-b-2 text-xl w-[100%] p-1 mt-2'
                    />
                    {/* {!isValidCredentials && <TextInput className='self-start text-red-500'>Invalid email address or password</TextInput>} */}
                    <View className='flex-row items-center w-[100%] justify-between mt-4'>
                        <View className='flex-row items-center'>
                            <CheckBox
                                disabled={false}
                                onValueChange={() => {
                                  
                                }}

                            />
                            <Text className='ml-2 mr-5'>By creating an account, you agree to our Terms of Service and Privacy Policy</Text>
                        </View>
                    </View>

                    <Pressable
                        onPress={() => {
                            // // Alert.alert(rememberMe.toString())
                            // verifyLogin()
                        }}
                        className='mt-4 bg-[#121212] w-[100%] p-3 rounded-xl flex-row justify-center items-center'>
                        <Text className='text-white text-xl font-bold'>SIGN UP</Text>
                    </Pressable>
                </View>
                <View className='self-center flex-row mt-4'>
                    <Text className='text-white'>Already have an account? </Text>
                    <Pressable
                        onPress={() => navigation.navigate('LoginModal')}>
                        <Text className='text-green-600'>Sign in! </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegistrationModal