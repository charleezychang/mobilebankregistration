import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import useDebounce from '../../hooks/useDebounce'


const StepSeven = ({ stepUpRegistration, stepDownRegistration, registrationStep, setAccount }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [isValidFirstName, setIsValidFirstName] = useState(true)
    const [isValidLastName, setIsValidLastName] = useState(true)
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true)

    const [isDebouncing, setIsDebouncing] = useState(false)

    const generalValidator = () => {
        if (firstName != "" &&
            lastName != "" &&
            phoneNumber != "" &&
            isValidFirstName &&
            isValidLastName &&
            isValidPhoneNumber) {
            return true
        }
    }

    const checkInput = useDebounce((key, value) => {
        setIsDebouncing(false)
        switch (key) {
            case 'firstname':
                if (value == '') {
                    setFirstName('')
                    setIsValidFirstName(false)
                }
                else if (value && /^[a-zA-Z\s.,'-]*$/.test(value)) {
                    setFirstName(value)
                    setIsValidFirstName(true)
                }
                else {
                    setFirstName(value)
                    setIsValidFirstName(false)
                }
                break;
            case 'lastname':
                if (value == '') {
                    setLastName('')
                    setIsValidLastName(false)
                }
                else if (value && /^[a-zA-Z\s.,'-]*$/.test(value)) {
                    setLastName(value)
                    setIsValidLastName(true)
                }
                else {
                    setLastName(value)
                    setIsValidLastName(false)
                }
                break;
            case 'phone':
                if (value == '') {
                    setPhoneNumber('')
                    setIsValidPhoneNumber(false)
                }
                else if (value && /^(09)\d{9}$/.test(value)) {
                    setPhoneNumber(value)
                    setIsValidPhoneNumber(true)
                }
                else {
                    setPhoneNumber(value)
                    setIsValidPhoneNumber(false)
                }
                break;

            default:
                break;
        }
    })

    const checkInputNoDebounce = (key, value) => {
        switch (key) {
            case 'firstname':
                if (value == '') {
                    setFirstName('')
                    setIsValidFirstName(false)
                }
                else if (value && /^[a-zA-Z\s.,'-]*$/.test(value)) {
                    setFirstName(value)
                    setIsValidFirstName(true)
                }
                else {
                    setFirstName(value)
                    setIsValidFirstName(false)
                }
                break;
            case 'lastname':
                if (value == '') {
                    setLastName('')
                    setIsValidLastName(false)
                }
                else if (value && /^[a-zA-Z\s.,'-]*$/.test(value)) {
                    setLastName(value)
                    setIsValidLastName(true)
                }
                else {
                    setLastName(value)
                    setIsValidLastName(false)
                }
                break;
            case 'phone':
                if (value == '') {
                    setPhoneNumber('')
                    setIsValidPhoneNumber(false)
                }
                else if (value && /^(09)\d{9}$/.test(value)) {
                    setPhoneNumber(value)
                    setIsValidPhoneNumber(true)
                }
                else {
                    setPhoneNumber(value)
                    setIsValidPhoneNumber(false)
                }
                break;

            default:
                break;
        }
    }

    const proceedHandler = () => {
        setAccount(prevState => {
            return ({
                ...prevState,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
            });
        })
        stepUpRegistration()
    }

    const backHandler = () => {
        stepDownRegistration()
    }

    return (
        <>
            <Text style={{ fontFamily: "Poppins-SemiBold" }} className='text-lg mb-4'>Account Details</Text>
            <Text style={{ fontFamily: "Poppins-Regular" }} className=' self-start'>Please your details.</Text>
            <TextInput
                placeholder='First Name'
                className={`border-b-2 text-xl w-[100%] py-1 px-2 mt-2 ${!isValidFirstName && 'border-b-red-500'}`}
                onChangeText={(value) => {
                    setIsDebouncing(true)
                    checkInput('firstname', value)
                }}
                // onEndEditing={event => checkInputNoDebounce('firstname', event.nativeEvent.text)}
                style={{ fontFamily: "Poppins-Regular" }}
            />
            {firstName == '' && !isValidFirstName && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>This is a required field.</Text>}
            {firstName != '' && !isValidFirstName && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>Invalid name.</Text>}
            <TextInput
                placeholder='Last Name'
                className={`border-b-2 text-xl w-[100%] py-1 px-2 mt-2 ${!isValidLastName && 'border-b-red-500'}`}
                onChangeText={(value) => {
                    setIsDebouncing(true)
                    checkInput('lastname', value)
                }}
                onEndEditing={event => checkInputNoDebounce('lastname', event.nativeEvent.text)}
                style={{ fontFamily: "Poppins-Regular" }}
            />
            {lastName == '' && !isValidLastName && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>This is a required field.</Text>}
            {lastName != '' && !isValidLastName && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>Invalid name.</Text>}
            <TextInput
                placeholder='Phone Number'
                keyboardType='number-pad'
                className={`border-b-2 text-xl w-[100%] py-1 px-2 mt-2 ${!isValidPhoneNumber && 'border-b-red-500'}`}
                onChangeText={(value) => {
                    setIsDebouncing(true)
                    checkInput('phone', value)
                }}
                onEndEditing={event => checkInputNoDebounce('phone', event.nativeEvent.text)}
                style={{ fontFamily: "Poppins-Regular" }}
            />
            {phoneNumber == '' && !isValidPhoneNumber && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>This is a required field.</Text>}
            {phoneNumber != '' && !isValidPhoneNumber && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>Follow format: 09XXXXXXXXX</Text>}

            <View className='w-[100%] flex-row mt-4 space-x-2'>
                <Pressable
                    onPress={() => {
                        backHandler()
                    }}
                    className='flex-1 w-[50%] bg-[#1C1C1E] p-3 rounded-xl flex-row justify-center items-center'>
                    <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Back</Text>
                </Pressable>
                <Pressable
                    disabled={!generalValidator() && true}
                    onPress={() => {
                        proceedHandler()
                    }}
                    className={`flex-1 w-[50%] ${generalValidator() ? 'bg-[#1C1C1E]' : 'bg-gray-400'} p-3 rounded-xl flex-row justify-center items-center`}>
                    {isDebouncing ? <ActivityIndicator size="small" color="#ffffff" /> : <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Proceed</Text>}
                </Pressable>

            </View>

        </>


    )
}

export default StepSeven