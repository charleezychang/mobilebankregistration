import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import useDebounce from '../../hooks/useDebounce'

const StepTwo = ({ stepUpRegistration, stepDownRegistration }) => {
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
        stepUpRegistration()
    }

    const backHandler = () => {
        stepDownRegistration()
    }

    return (
        <>
            <TextInput
                placeholder='Email Address'
                className={`border-b-2 text-xl w-[100%] p-1 ${!isValidEmail && 'border-b-red-500'}`}
                onChangeText={(value) => checkInput(value)}
                style={{ fontFamily: "Poppins-Regular" }}
            />
            {email == '' && !isValidEmail && <TextInput className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>This is a required field.</TextInput>}
            {email != '' && !isValidEmail && <TextInput className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>Invalid email.</TextInput>}
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