import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import TermsAndConditions from '../TermsAndConditions';
import Checkbox from 'expo-checkbox';
import useAlert from '../../hooks/useAlert'

const StepOne = ({ stepUpRegistration, stepDownRegistration }) => {
    const [toggleTos, setToggleTos] = useState(false)

    const proceedHandler = () => {
        if (!toggleTos) {
            useAlert({
                title: "Terms and Conditions",
                message: "You must agree to the Terms of Service and Privacy Policy.",
                button: "Okay"
            })
        }
        else {
            stepUpRegistration()
        }
    }

    return (
        <>
            <ScrollView className='h-[250px] bg-gray-100 p-1 rounded-md'>
                <TermsAndConditions />
            </ScrollView>
            <View className='flex-row items-center w-[100%] justify-between mt-4'>
                <View className='flex-row items-center'>
                    <Checkbox
                        // disabled={false}
                        value={toggleTos}
                        onValueChange={() => {
                            { setToggleTos(!toggleTos) }
                        }}
                    />
                    <Text className={`ml-2 mr-5 text-[12px]`} style={{ fontFamily: "Poppins-Regular" }}>By creating an account, you agree to our Terms of Service and Privacy Policy</Text>
                </View>
            </View>
            {/* <Pressable
                onPress={() => {
                    proceedHandler()
                }}
                className='mt-4 bg-[#1C1C1E] w-[100%] p-3 rounded-xl flex-row justify-center items-center'>
                <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Proceed</Text>
            </Pressable> */}
            <Pressable
                disabled={toggleTos ? false : true}
                onPress={() => {
                    proceedHandler()
                }}
                className={`mt-4 w-[100%] ${toggleTos ? 'bg-[#1C1C1E]' : 'bg-gray-400'} p-3 rounded-xl flex-row justify-center items-center`}>
                <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Proceed</Text>
            </Pressable>
        </>
    )
}

export default StepOne