import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import cities from '../../data/cities.json'
import provinces from '../../data/provinces.json'
import regions from '../../data/regions.json'
import { Picker } from '@react-native-picker/picker';
import phil from 'phil-reg-prov-mun-brgy'

const StepSeven = ({ stepUpRegistration, stepDownRegistration, registrationStep, setAccount }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [isValidFirstName, setIsValidFirstName] = useState(true)
    const [isValidLastName, setIsValidLastName] = useState(true)
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true)

    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [region, setRegion] = useState('')
    const [municipality, setMunicipality] = useState('')
    const [barangay, setBarangay] = useState('')

    const checkInput = useDebounce((key, value) => {
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

    console.log(phil.regions);

    const proceedHandler = () => {
        setAccount(prevState => {
            return ({
                ...prevState,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                region: region,
                province: province,
                city: city,
                municipality: municipality,
                barangay: barangay
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
            <Text style={{ fontFamily: "Poppins-Regular" }} className=' self-start'>Please your details.</Text>
            <TextInput
                placeholder='First Name'
                className={`border-b-2 text-xl w-[100%] py-1 px-2 ${!isValidFirstName && 'border-b-red-500'}`}
                onChangeText={(value) => checkInput('firstname', value)}
                style={{ fontFamily: "Poppins-Regular" }}
            />
            {firstName == '' && !isValidFirstName && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>This is a required field.</Text>}
            {firstName != '' && !isValidFirstName && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>Invalid name.</Text>}
            <TextInput
                placeholder='Last Name'
                className={`border-b-2 text-xl w-[100%] py-1 px-2 ${!isValidLastName && 'border-b-red-500'}`}
                onChangeText={(value) => checkInput('lastname', value)}
                style={{ fontFamily: "Poppins-Regular" }}
            />
            {lastName == '' && !isValidLastName && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>This is a required field.</Text>}
            {lastName != '' && !isValidLastName && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>Invalid name.</Text>}
            <TextInput
                placeholder='Phone Number'
                className={`border-b-2 text-xl w-[100%] py-1 px-2 ${!isValidPhoneNumber && 'border-b-red-500'}`}
                onChangeText={(value) => checkInput('phone', value)}
                style={{ fontFamily: "Poppins-Regular" }}
            />
            {phoneNumber == '' && !isValidPhoneNumber && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>This is a required field.</Text>}
            {phoneNumber != '' && !isValidPhoneNumber && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>Follow format: 09XXXXXXXXX</Text>}
            <View className='bg-gray-100 w-[100%] mb-4' style={{ fontFamily: "Poppins-Regular" }}>
                <Picker
                    selectedValue={region}
                    itemStyle={{fontFamily: "Poppins-Regular"}}
                // onValueChange={(itemValue, itemIndex) => {
                //     setSecurityQuestion(itemValue)
                //     proceedHandler()
                // }}
                >
                    {phil.regions.map((region) => {
                        return <Picker.Item label={region.name} value={region.name} key={region.name} fontFamily={"Poppins-SemiBold"}/>
                    })}

                </Picker>
            </View>

            {/* <View className='w-[100%] flex-row mt-4 space-x-2'>
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
                    <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Proceed</Text>
                </Pressable>

            </View> */}

        </>


    )
}

export default StepSeven