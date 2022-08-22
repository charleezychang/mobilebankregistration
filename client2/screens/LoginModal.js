import { View, Text, StatusBar, Image, Pressable, TextInput, Alert, Switch, Platform, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from 'expo-checkbox';
import BlurCirclesBg from '../components/BlurCirclesBg'

const LoginModal = (props) => {
    const [rememberMe, setRememberMe] = useState(null)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValidCredentials, setIsValidCredentials] = useState(true)


    // placeholder for account database
    let myAccount = {
        email: "charles@gmail.com",
        password: "password123"
    }
    const navigation = useNavigation()
    useEffect(() => {
        navigation.navigate('NoConnection')
        const unsubscribe = NetInfo.addEventListener(state => {
            // set state.isConnected to true if want to check NoConnectionScreen
            if (state.isConnected == false) {
                navigation.navigate('NoConnection')
            }
        });
        // check rememberMe toggle from storage
        if (rememberMe == null) {
            const fetchRememberMe = async () => {
                const email = await getData('emailstorage')
                const data = await getData('rememberMe')
                if (data == null) {
                    storeData('rememberMe', 'false')
                    setRememberMe('false')
                }
                else if (data == "false") {
                    setRememberMe(data)

                }
                else if (data == "true") {
                    setRememberMe(data)
                    setEmail(email)
                }
            }
            fetchRememberMe()
        }

        return () => {
            unsubscribe();
        }
    }, [])

    const verifyLogin = () => {
        setIsValidEmail(true)
        if (myAccount.email == email && myAccount.password == password) {
            setIsValidCredentials(true)
            navigation.navigate('OtpModal')
            // OTP
        }
        else {
            setIsValidCredentials(false)
        }
    }

    const toggleRememberMe = (param) => {
        let newState = !(rememberMe.toString() === "true")
        setRememberMe(newState.toString())
        rememberMe ? storeData(param, email) : storeData(param, '')
        storeData('rememberMe', newState.toString())
    };

    const emailValidation = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setIsValidEmail(true)
        }
        else {
            setIsValidEmail(false)
        }
    }

    const storeData = async (param, value) => {
        try {
            await AsyncStorage.setItem(`@${param}`, value)
        } catch (e) {
            // saving error
        }
    }

    const getData = async (param) => {
        try {
            const value = await AsyncStorage.getItem(`@${param}`)
            return value
        } catch (e) {
            // error reading value
        }
    }


    return (
        <SafeAreaView className='flex-1 bg-black'>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={false}>
                <StatusBar barStyle="light-content" backgroundColor="black" />
                <BlurCirclesBg />
                {/* Company Logo */}
                <View className='h-[35%] flex-row justify-center items-end'>
                    <Image source={require('../assets/splash.png')} className='h-[50%] mb-4' resizeMode='contain' />
                </View>
                {/* Prompt to Login or Register */}
                <View className={`h-[65%] flex-column`}>
                    <View className={`mt-10 ml-10 mr-10 p-5 bg-white rounded-2xl flex-column items-center `}>
                        <TextInput
                            defaultValue={email}
                            placeholder='Enter your email address'
                            className={`text-xl w-[100%] p-1 border-b-2 ${!isValidEmail && 'border-b-red-500'}`}
                            onEndEditing={(event) => {
                                emailValidation(event.nativeEvent.text)
                                setEmail(event.nativeEvent.text)
                                if (rememberMe.toString() === "true") {
                                    storeData('emailstorage', event.nativeEvent.text)
                                }
                            }}
                        />
                        {!isValidEmail && <TextInput className='self-start text-red-500'>Invalid email address</TextInput>}
                        <TextInput
                            secureTextEntry={true}
                            placeholder='Enter your password'
                            className=' border-b-2 text-xl w-[100%] p-1 mt-2'
                            onChangeText={(passwordInput) => {
                                setPassword(passwordInput)
                            }}
                        />
                        {!isValidCredentials && <TextInput className='self-start text-red-500'>Invalid email address or password</TextInput>}
                        <View className='flex-row items-center w-[100%] justify-between mt-4'>
                            <View className='flex-row items-center'>
                                <CheckBox
                                    disabled={false}
                                    value={rememberMe ? (rememberMe.toString() === "true") : false}
                                    onValueChange={() => {
                                        toggleRememberMe('emailstorage')
                                    }}
                                />
                                <Text className='ml-2'>Remember Me</Text>
                            </View>
                            <Pressable>
                                <Text>Forgot Password?</Text>
                            </Pressable>
                        </View>

                        <Pressable
                            onPress={() => {
                                verifyLogin()
                            }}
                            className='mt-4 bg-[#1C1C1E] w-[100%] p-3 rounded-xl flex-row justify-center items-center'>
                            <Text className='text-white text-xl font-bold'>LOGIN</Text>
                        </Pressable>
                    </View>
                    <View className='self-center flex-row mt-4'>
                        <Text className='text-white'>Don't have an account? </Text>
                        <Pressable onPress={() => navigation.navigate('RegistrationModal')}><Text className='text-green-600'>Sign-up! </Text></Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginModal