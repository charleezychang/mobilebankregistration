import { View, Text, StatusBar, Pressable, Platform, KeyboardAvoidingView } from 'react-native'
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
import StepEight from '../components/RegistrationSteps/StepEight';
import StepNine from '../components/RegistrationSteps/StepNine';

const RegistrationModal = (props) => {
    const [account, setAccount] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        securityQuestion: "",
        securityAnswer: "",
        // region: "",
        province: "",
        municipality: "",
        barangay: "",
        streetAddress: ""
    })

    const [registrationStep, setRegistrationStep] = useState(0)

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
        <SafeAreaView className={`flex-1 bg-black`}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={false}>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            {/* Logo */}
            <View className={`${(registrationStep == 2 || registrationStep == 9) ? 'h[10%]' : 'h-[20%]'}  flex-row justify-center items-end`}>
                <NewspaperIcon fill="white" size={70} />
            </View>
            {/* Background */}
            <BlurCirclesBg />
            {/* Progress Bar */}
            <ProgressBar registrationStep={registrationStep} />
            {/* Registration Steps*/}
            <View className={`${(registrationStep == 2 || registrationStep == 9) ? 'h[90%]' : 'h-[80%]'} flex-column self-center ${Platform.OS === 'web' && 'w-[30%]'}`}>
                <View className={`mt-10 ml-10 mr-10 p-5 w-[300px] ${(registrationStep != 2 && registrationStep != 9) && 'bg-white rounded-2xl'} flex-column items-center`}>
                    {registrationStep == 0 && <StepOne stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>}
                    {registrationStep == 1 && <StepTwo stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {registrationStep == 2 && <StepThree stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {(registrationStep == 3 || registrationStep == 4) && <StepFour stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {(registrationStep == 5 || registrationStep == 6) && <StepFive stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {registrationStep == 7 && <StepSeven stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {registrationStep == 8 && <StepEight stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
                    {registrationStep == 9 && <StepNine stepUpRegistration={stepUpRegistration} stepDownRegistration={stepDownRegistration} registrationStep={registrationStep} setAccount={setAccount} account={account}/>} 
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