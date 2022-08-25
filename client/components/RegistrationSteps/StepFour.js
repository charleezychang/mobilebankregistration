import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import useDebounce from '../../hooks/useDebounce'

const StepTwo = ({ stepUpRegistration, stepDownRegistration, registrationStep, setAccount }) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true)
    const [passwordCheckLength, setPasswordCheckLength] = useState(false)
    const [passwordCheckCharacter, setPasswordCheckCharacter] = useState(false)

    const [isDebouncing, setIsDebouncing] = useState(false)

    const checkInput = useDebounce((key, value) => {
        // setIsDebouncing(false)
        switch (key) {
            case 'password':
                if (value == '') {
                    setPassword('')
                    setIsValidPassword(false)
                    setPasswordCheckLength(false)
                    setPasswordCheckCharacter(false)
                    setConfirmPassword('')
                    setIsValidConfirmPassword(true)
                    registrationStep == 4 && stepDownRegistration()
                }
                else if (value && checkPassword(value)) {
                    setPassword(value)
                    setIsValidPassword(true)
                    registrationStep == 3 && stepUpRegistration()
                }
                else {
                    setPassword(value)
                    setIsValidPassword(false)
                    setConfirmPassword('')
                    setIsValidConfirmPassword(true)
                    registrationStep == 4 && stepDownRegistration()
                }
                break;
            case 'confirm':
                if (value == '') {
                    setConfirmPassword('')
                    setIsValidConfirmPassword(false)
                }
                else if (value && value == password) {
                    setConfirmPassword(value)
                    setIsValidConfirmPassword(true)
                }
                else {
                    setConfirmPassword(value)
                    setIsValidConfirmPassword(false)
                }
                break;
            default:
                break;
        }
    })

    const checkPassword = (passwordToBeChecked) => {
        if (passwordToBeChecked.length >= 8) {
            setPasswordCheckLength(true)
        }
        else {
            setPasswordCheckLength(false)
        }
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?()])/.test(passwordToBeChecked)) {
            setPasswordCheckCharacter(true)
        }
        else {
            setPasswordCheckCharacter(false)
        }
        if (passwordToBeChecked.length >= 8 && /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?()])/.test(passwordToBeChecked)) {
            return true
        }
        else {
            return false
        }
    }

    const proceedHandler = () => {
        setAccount(prevState => {
            return ({
                ...prevState,
                password: password
            });
        })
        stepUpRegistration()
    }

    const backHandler = () => {
        stepDownRegistration()
    }

    return (
        <>
            <Text style={{ fontFamily: "Poppins-SemiBold" }} className='text-lg mb-4'>Account Credentials</Text>
            <Text style={{ fontFamily: "Poppins-Regular" }} className='mb-2 self-start'>Please enter a password.</Text>
            <TextInput
                secureTextEntry={true}
                placeholder='Password'
                className={`border-b-2 text-xl w-[100%] py-1 px-2 ${!isValidPassword && 'border-b-red-500'}`}
                onChangeText={(value) => {
                    // setIsDebouncing(true)
                    checkInput('password', value)
                }}
            />
            {password == '' && !isValidPassword && <Text className='self-start text-red-500' style={{fontFamily: "Poppins-Regular"}}>This is a required field.</Text>}
            {password != '' && !isValidPassword && <Text className='self-start text-red-500' style={{fontFamily: "Poppins-Regular"}}>Follow password format.</Text>}
            {(isValidPassword && password != "") && <TextInput
                secureTextEntry={true}
                placeholder='Confirm Password'
                className={`border-b-2 text-xl w-[100%] mt-2 py-1 px-2 ${!isValidConfirmPassword && 'border-b-red-500'}`}
                onChangeText={(value) => {
                    // setIsDebouncing(true)
                    checkInput('confirm', value)
                }}
            />}
            {confirmPassword == '' && !isValidConfirmPassword && <Text className='self-start text-red-500' style={{fontFamily: "Poppins-Regular"}}>This is a required field.</Text>}
            {confirmPassword != '' && !isValidConfirmPassword && <Text className='self-start text-red-500' style={{fontFamily: "Poppins-Regular"}}>Password does not match.</Text>}
            <View className='mt-3 items-start w-[100%]'>
                <Text className={passwordCheckLength ? 'text-green-500' : 'text-gray-300'} style={{fontFamily: "Poppins-Regular"}}> ✓ Has atleast 8 character</Text>
                <Text className={passwordCheckCharacter ? 'text-green-500' : 'text-gray-300'} style={{fontFamily: "Poppins-Regular"}}> ✓ Has an uppercase, lowercase, digits, and symbols</Text>
            </View>
            <View className='w-[100%] flex-row mt-4 space-x-2'>
                <Pressable
                    onPress={() => {
                        backHandler()
                    }}
                    className='flex-1 w-[50%] bg-[#1C1C1E] p-3 rounded-xl flex-row justify-center items-center'>
                    <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Back</Text>
                </Pressable>
                <Pressable
                    disabled={(!isValidConfirmPassword || !isValidPassword) && true}
                    onPress={() => {
                        proceedHandler()
                    }}
                    className={`flex-1 w-[50%] ${isValidConfirmPassword && confirmPassword ? 'bg-[#1C1C1E]' : 'bg-gray-400'} p-3 rounded-xl flex-row justify-center items-center`}>
                    {/* {isDebouncing ? <ActivityIndicator size="small" color="#ffffff" /> : <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Proceed</Text>} */}
                    <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Proceed</Text>
                </Pressable>

            </View>

        </>


    )
}

export default StepTwo