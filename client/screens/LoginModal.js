import { View, Text, StatusBar, Image, Pressable, TextInput, Alert, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import CheckBox from 'expo-checkbox';

const LoginModal = () => {
    const [rememberMe, setRememberMe] = useState(false)
    const [isValidEmail, setisValidEmail] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            if (state.isConnected == true) { // set to false 
                navigation.navigate('NoConnectionModal')
            }
          });
          
      return () => {
        unsubscribe();
      }
    }, [])
    

    const toggleRememberMe = () => setRememberMe(previousState => !previousState);

    const emailValidation = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setisValidEmail(true)
        }
        else {
            setisValidEmail(false)
        }
    }

    return (
        <SafeAreaView className='flex-1 bg-[#121212]'>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            {/* Company Logo */}
            <View className='h-[40%] flex-row justify-center items-end'>
                <Image source={require('../assets/splash.png')} className='h-[40%] mb-4' resizeMode='contain' />
            </View>
            {/* Prompt to Login or Register */}
            <View className='h-[60%] flex-column '>
                <View className='mt-10 ml-10 mr-10 p-5 bg-white rounded-2xl flex-column items-center'>
                    <TextInput
                        placeholder='Enter your email address'
                        className={`text-xl w-[100%] p-1 border-b-2 ${!isValidEmail && 'border-b-red-500'}` }
                        onEndEditing={(event) => emailValidation(event.nativeEvent.text)}
                    />
                    {!isValidEmail && <TextInput className='self-start text-red-500'>Invalid email address</TextInput>}
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Enter your password'
                        className=' border-b-2 text-xl w-[100%] p-1 mt-2'
                    />
                    <View className='flex-row items-center w-[100%] justify-between mt-4'>
                        <View className='flex-row items-center'>
                            <CheckBox
                                disabled={false}
                                value={rememberMe}
                                onValueChange={toggleRememberMe}

                            />
                            <Text className='ml-2'>Remember Me</Text>
                        </View>
                        <Pressable>
                            <Text>Forgot Password?</Text>
                        </Pressable>
                    </View>

                    <Pressable
                        onPress={() => {
                            Alert.alert(rememberMe.toString())
                        }}
                        className='mt-4 bg-[#121212] w-[100%] p-3 rounded-xl flex-row justify-center items-center'>
                        <Text className='text-white text-xl font-bold'>LOGIN</Text>
                    </Pressable>
                </View>
                <View className='self-center flex-row mt-4'>
                    <Text className='text-white'>Don't have an account? </Text>
                    <Pressable ><Text className='text-green-600'>Sign-up! </Text></Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginModal