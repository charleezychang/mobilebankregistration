import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import useDebounce from '../../hooks/useDebounce'

const StepTwo = ({ stepUpRegistration, stepDownRegistration, registrationStep, setAccount }) => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)

    const checkInput = useDebounce((value) => {
        if (value == '') {
            setEmail('')
            setIsValidEmail(false)
        }
        else if (value && /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/.test(value)) {
            setEmail(value)
            setIsValidEmail(true)
        }
        else {
            setEmail(value)
            setIsValidEmail(false)
        }
    })

    const proceedHandler = () => {
        setAccount(prevState => {
            return ({
                ...prevState,
                email: email
            });
        })
        stepUpRegistration()
    }

    const backHandler = () => {
        stepDownRegistration()
    }

    return (
        <>
            <Text style={{ fontFamily: "Poppins-SemiBold" }} className='text-lg mb-4'>Account Username</Text>
            <TextInput
                placeholder='Email Address'
                className={`text-lg w-[100%] py-1 px-2 ${!isValidEmail && 'border-b-red-500'} ${registrationStep != 1 ? 'bg-gray-100 rounded-md text-gray-400' : 'border-b-2'}`}
                onChangeText={(value) => checkInput(value)}
                style={{ fontFamily: "Poppins-Regular" }}
                editable={registrationStep == 1 && true}
                defaultValue={email}
            />
            {email == '' && !isValidEmail && <TextInput className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>This is a required field.</TextInput>}
            {email != '' && !isValidEmail && <TextInput className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>Invalid email.</TextInput>}
            {/* {registrationStep == 2 && <View className='m-5 w-[100%] flex-column items-center'>
                <View className='flex-row space-x-2 mb-5'>
                    <View className='flex-row w-[48px] h-[48px] justify-center items-center rounded-md border-[1px]'><TextInput maxLength={1} keyboardType={'number-pad'} className='text-2xl text-center' style={{fontFamily: "Poppins-Regular"}}/></View>
                    <View className='flex-row w-[48px] h-[48px] justify-center items-center rounded-md border-[1px]'><TextInput maxLength={1} keyboardType={'number-pad'} className='text-2xl text-center' style={{fontFamily: "Poppins-Regular"}}/></View>
                    <View className='flex-row w-[48px] h-[48px] justify-center items-center rounded-md border-[1px]'><TextInput maxLength={1} keyboardType={'number-pad'} className='text-2xl text-center' style={{fontFamily: "Poppins-Regular"}}/></View>
                    <View className='flex-row w-[48px] h-[48px] justify-center items-center rounded-md border-[1px]'><TextInput maxLength={1} keyboardType={'number-pad'} className='text-2xl text-center' style={{fontFamily: "Poppins-Regular"}}/></View>
                </View>
                <Text style={{ fontFamily: "Poppins-Regular" }}>We have sent a verification code to:</Text>
                <Text style={{ fontFamily: "Poppins-SemiBold" }}>{email}</Text>
            </View>} */}
            <View className='w-[100%] flex-row mt-4 space-x-2'>
                <Pressable
                    onPress={() => {
                        backHandler()
                    }}
                    className='flex-1 w-[50%] bg-[#1C1C1E] p-3 rounded-xl flex-row justify-center items-center'>
                    <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Back</Text>
                </Pressable>
                <Pressable
                    disabled={!isValidEmail || !email && true}
                    onPress={() => {
                        proceedHandler()
                    }}
                    className={`flex-1 w-[50%] ${isValidEmail && email ? 'bg-[#1C1C1E]' : 'bg-gray-400'} p-3 rounded-xl flex-row justify-center items-center`}>
                    <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Proceed</Text>
                </Pressable>

            </View>

        </>


    )
}

export default StepTwo