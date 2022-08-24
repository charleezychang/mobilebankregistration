import { View, Text, StatusBar, Image, Pressable, TextInput, Alert, Switch, Platform, ScrollView, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import { NewspaperIcon } from "react-native-heroicons/solid";
import BlurCirclesBg from '../components/BlurCirclesBg'
import ProgressBar from '../components/ProgressBar';
import StepOne from '../components/RegistrationSteps/StepOne';
import StepTwo from '../components/RegistrationSteps/StepTwo';
import StepThree from '../components/RegistrationSteps/StepThree';
import StepFour from '../components/RegistrationSteps/StepFour';
import StepFive from '../components/RegistrationSteps/StepFive'
import StepSeven from '../components/RegistrationSteps/StepSeven'
import useDebounce from '../hooks/useDebounce';

const RegistrationModal = (props) => {
    const [account, setAccount] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        securityQuestion: "",
        securityAnswer: "",
        addressStreet: "",

    })

    const [registrationStep, setRegistrationStep] = useState(7)

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

    const stepUpRegistration = () => {
        setRegistrationStep(prevState => prevState + 1)
    }

    const stepDownRegistration = () => {
        setRegistrationStep(prevState => prevState - 1)
    }

    return (
        <SafeAreaView className={`flex-1 bg-black flex-column items-center`}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={false}>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            {/* Logo */}
            <View className={`${registrationStep == 2 ? 'h[10%]' : 'h-[20%]'}  flex-row justify-center items-end`}>
                <NewspaperIcon fill="white" size={70} />
            </View>
            {/* Background */}
            <BlurCirclesBg />
            {/* Progress Bar */}
            <ProgressBar registrationStep={registrationStep} />
            {/* Registration Steps*/}
            <View className={`${registrationStep == 2 ? 'h[90%]' : 'h-[80%]'} flex-column ${Platform.OS === 'web' && 'w-[30%]'}`}>
                <View className={`mt-10 ml-10 mr-10 p-5 w-[300px] ${registrationStep != 2 && 'bg-white rounded-2xl'} flex-column items-center`}>
                    {registrationStep == 0 && <StepOne stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>}
                    {registrationStep == 1 && <StepTwo stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {registrationStep == 2 && <StepThree stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {(registrationStep == 3 || registrationStep == 4) && <StepFour stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {(registrationStep == 5 || registrationStep == 6) && <StepFive stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {(registrationStep == 7) && <StepSeven stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {/* <TextInput
                        placeholder='Full Name'
                        className={`text-xl w-[100%] p-1 border-b-2 ${!isValidFullName && 'border-b-red-500'}`}
                        onChangeText={(value) => checkForm('name', value)}
                    />
                    {fullName == '' && !isValidFullName && <TextInput className='self-start text-red-500'>This is a required field.</TextInput>}
                    {fullName != '' && !isValidFullName && <TextInput className='self-start text-red-500'>Invalid full name.</TextInput>}
                    <TextInput
                        placeholder='Phone Number'
                        className={`border-b-2 text-xl w-[100%] p-1 ${!isValidPhoneNumber && 'border-b-red-500'}`}
                        onChangeText={(value) => checkForm('phone', value)}
                    />
                    {phoneNumber == '' && !isValidPhoneNumber && <TextInput className='self-start text-red-500'>This is a required field.</TextInput>}
                    {phoneNumber != '' && !isValidPhoneNumber && <TextInput className='self-start text-red-500'>Follow format: 09XXXXXXXXX </TextInput>} */}

                    {/* <TextInput
                        secureTextEntry={true}
                        placeholder='Password'
                        className={`border-b-2 text-xl w-[100%] p-1 ${!isValidPassword && 'border-b-red-500'}`}
                        onChangeText={(value) => checkForm('password', value)}
                    />
                    {password == '' && !isValidPassword && <TextInput className='self-start text-red-500'>This is a required field.</TextInput>}
                    {password != '' && !isValidPassword && <TextInput className='self-start text-red-500'>Follow password format.</TextInput>}
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Confirm Password'
                        className={`border-b-2 text-xl w-[100%] p-1 ${!isValidConfirmPassword && 'border-b-red-500'}`}
                        onChangeText={(value) => checkForm('confirm', value)}
                    />
                    {confirmPassword == '' && !isValidConfirmPassword && <TextInput className='self-start text-red-500'>This is a required field.</TextInput>}
                    {confirmPassword != '' && !isValidConfirmPassword && <TextInput className='self-start text-red-500'>Password does not match.</TextInput>}
                    <View className='mt-3 items-start w-[100%]'>
                        <Text className={passwordCheckLength ? 'text-green-500' : 'text-gray-300'}> ✓ Has atleast 8 character</Text>
                        <Text className={passwordCheckCharacter ? 'text-green-500' : 'text-gray-300'}> ✓ Has an uppercase, lowercase, digits, and symbols</Text>
                    </View> */}

                    {/* {!isValidCredentials && <TextInput className='self-start text-red-500'>Invalid email address or password</TextInput>} */}




                    {/* {registrationStep > 0 && registrationStep < 9 &&
                        <View className='w-[100%] flex-row mt-4 space-x-2'>
                            <Pressable
                                onPress={() => {
                                    stepDownRegistration()
                                }}
                                className='flex-1 w-[50%] bg-[#1C1C1E] p-3 rounded-xl flex-row justify-center items-center'>
                                <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Back</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    stepUpRegistration()
                                }}
                                className='flex-1 w-[50%] bg-[#1C1C1E] p-3 rounded-xl flex-row justify-center items-center'>
                                <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Proceed</Text>
                            </Pressable>
                        </View>
                    } */}

                </View>
                <View className='self-center flex-row mt-4'>
                    <Text className='text-white' style={{ fontFamily: "Poppins-Regular" }}>Already have an account? </Text>
                    <Pressable
                        onPress={() => navigation.navigate('Login')}>
                        <Text className='text-[#32D74B]' style={{ fontFamily: "Poppins-Regular" }}>Sign in! </Text>
                    </Pressable>
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RegistrationModal