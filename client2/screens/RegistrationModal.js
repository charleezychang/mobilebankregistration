import { View, Text, StatusBar, Image, Pressable, TextInput, Alert, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import CheckBox from 'expo-checkbox';
import { NewspaperIcon } from "react-native-heroicons/solid";

const RegistrationModal = () => {
    const [toggleTos, setToggleTos] = useState(false)

    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [isValidFullName, setIsValidFullName] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true)
    const [passwordCheckLength, setPasswordCheckLength] = useState(false)
    const [passwordCheckCharacter, setPasswordCheckCharacter] = useState(false)

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

    const checkForm = debounce((param, value) => {
        switch (param) {
            case 'name':
                if (value == '') {
                    setFullName('')
                    setIsValidFullName(false)
                }
                else if (value && /^[a-zA-Z\s.,'-]*$/.test(value)) {
                    setFullName(value)
                    setIsValidFullName(true)
                }
                else {
                    setFullName(value)
                    setIsValidFullName(false)
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
            case 'email':
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
                break;
            case 'password':
                if (value == '') {
                    setPassword('')
                    setIsValidPassword(false)
                    setPasswordCheckLength(false)
                    setPasswordCheckCharacter(false)
                }
                else if (value && checkPassword(value)) {
                    setPassword(value)
                    setIsValidPassword(true)
                }
                else {
                    setPassword(value)
                    setIsValidPassword(false)
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
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])/.test(passwordToBeChecked)) {
            console.log("checking check character");
            setPasswordCheckCharacter(true)
        }
        else {
            setPasswordCheckCharacter(false)
        }
        if (passwordToBeChecked.length >= 8 && /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])/.test(passwordToBeChecked)) {
            return true
        }
        else {
            return false
        }
    }

    function debounce(cb, delay = 1500) {
        let timeout
        return (...args) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                cb(...args)
            }, delay)
        }
    }

    const completeSignUp = () => {
        if (isValidConfirmPassword && isValidEmail && isValidFullName && isValidPhoneNumber && isValidPassword && toggleTos) {
            navigation.navigate('SuccessRegModal')
        }
        if (fullName == '') {
            setIsValidFullName(false)
        }
        if (phoneNumber == '') {
            setIsValidPhoneNumber(false)
        }
        if (email == '') {
            setIsValidEmail(false)
        }
        if (password == '') {
            setIsValidPassword(false)
        }
        if (confirmPassword == '') {
            setIsValidConfirmPassword(false)
        }
        if (!toggleTos) {
            showAlert()
        }

    }

    const showAlert = () => {
        Alert.alert(
          "Terms and Conditions",
          "You must agree to the Terms of Service and Privacy Policy.",
          [
            {
              text: "Okay",
              onPress: () => {
              },
              style: "cancel",
            },
          ]
        )
      }

    return (
        <SafeAreaView className='flex-1 bg-[#121212]'>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            {/* Company Logo */}
            <View className='h-[20%] flex-row justify-center items-end'>
                <NewspaperIcon fill="white" size={70} />
            </View>
            {/* Prompt to Login or Register */}
            <View className='h-[80%] flex-column '>
                <View className='mt-10 ml-10 mr-10 p-5 bg-white rounded-2xl flex-column items-center'>
                    <TextInput
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
                    {phoneNumber != '' && !isValidPhoneNumber && <TextInput className='self-start text-red-500'>Follow format: 09XXXXXXXXX </TextInput>}
                    <TextInput
                        placeholder='Email Address'
                        className={`border-b-2 text-xl w-[100%] p-1 ${!isValidEmail && 'border-b-red-500'}`}
                        onChangeText={(value) => checkForm('email', value)}
                    />
                    {email == '' && !isValidEmail && <TextInput className='self-start text-red-500'>This is a required field.</TextInput>}
                    {email != '' && !isValidEmail && <TextInput className='self-start text-red-500'>Invalid email.</TextInput>}
                    <TextInput
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
                    </View>

                    {/* {!isValidCredentials && <TextInput className='self-start text-red-500'>Invalid email address or password</TextInput>} */}
                    <View className='flex-row items-center w-[100%] justify-between mt-4'>
                        <View className='flex-row items-center'>
                            <CheckBox
                                // disabled={false}
                                value={toggleTos}
                                onValueChange={() => {
                                    { setToggleTos(!toggleTos) }
                                }}
                            />
                            <Text className='ml-2 mr-5'>By creating an account, you agree to our Terms of Service and Privacy Policy</Text>
                        </View>
                    </View>

                    <Pressable
                        onPress={() => {
                            // // Alert.alert(rememberMe.toString())
                            completeSignUp()
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