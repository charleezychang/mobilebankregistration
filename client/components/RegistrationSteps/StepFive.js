
import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const StepFive = ({ stepUpRegistration, stepDownRegistration, registrationStep, setAccount }) => {
    const [securityQuestion, setSecurityQuestion] = useState(0);
    const [securityAnswer, setSecurityAnswer] = useState('')
    const [isValidAnswer, setIsValidAnswer] = useState(true)

    // Enum for security questions
    // const securityQuestions = {
    //     1: "In what city were you born?",
    //     2: "What is the name of your favorite pet?",
    //     3: "What is your mother's maiden name?",
    //     4: "What high school did you attend?",
    //     5: "What was the name of your elementary school?",
    //     6: "What was the make of your first car?",
    //     7: "What was your favorite food as a child?"
    // }

    const backHandler = () => {
        if (registrationStep == 5) {
            stepDownRegistration()
        }
        else if (registrationStep == 6) {
            stepDownRegistration()
            stepDownRegistration()
        }
    }

    const proceedHandler = () => {
        if (registrationStep == 5) {
            stepUpRegistration()
        }
        else if (registrationStep == 6) {
            setAccount(prevState => {
                return ({
                    ...prevState,
                    securityQuestion: securityQuestion,
                    securityAnswer: securityAnswer
                });
            })
            stepUpRegistration()
        }
    }

    return (
        <View className=' w-[100%] flex-column '>
            <Text style={{ fontFamily: "Poppins-SemiBold" }} className='text-lg self-center mb-4'>Account Security</Text>
            <Text style={{ fontFamily: "Poppins-Regular" }} className='mb-2'>Please select a security question.</Text>
            <View className='bg-gray-100  mb-4'>
                <Picker
                    selectedValue={securityQuestion}
                    onValueChange={(itemValue, itemIndex) => {
                        setSecurityQuestion(itemValue)
                        proceedHandler()
                    }}>
                    <Picker.Item label="Select one." enabled={false} value={0} />
                    <Picker.Item label="In what city were you born?" value={1} />
                    <Picker.Item label="What is the name of your favorite pet?" value={2} />
                    <Picker.Item label="What is your mother's maiden name?" value={3} />
                    <Picker.Item label="What high school did you attend?" value={4} />
                    <Picker.Item label="What was the name of your elementary school?" value={5} />
                    <Picker.Item label="What was the make of your first car?" value={6} />
                    <Picker.Item label="What was your favorite food as a child?" value={7} />
                </Picker>
            </View>

            {registrationStep == 6 && <>
                <Text style={{ fontFamily: "Poppins-Regular" }} className='mb-2'>Please type your answer to the security question.</Text>
                <TextInput
                    placeholder='Security Question Answer'
                    className={`border-b-2 text-xl w-[100%] py-1 px-2 `}
                    onChangeText={(value) => {
                        if (value != "") {
                            setSecurityAnswer(true)
                        }
                        else {
                            setSecurityAnswer(false)
                        }
                    }}
                />
                {securityAnswer == '' && !isValidAnswer && <Text className='self-start text-red-500' style={{fontFamily: "Poppins-Regular"}}>This is a required field.</Text>}
            </>}

            <View className='w-[100%] flex-row mt-4 space-x-2'>
                <Pressable
                    onPress={() => {
                        backHandler()
                    }}
                    className='flex-1 w-[50%] bg-[#1C1C1E] p-3 rounded-xl flex-row justify-center items-center'>
                    <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Back</Text>
                </Pressable>
                <Pressable
                    disabled={(!isValidAnswer || securityAnswer == "") && true}
                    onPress={() => {
                        proceedHandler()
                    }}
                    className={`flex-1 w-[50%] ${isValidAnswer && securityAnswer ? 'bg-[#1C1C1E]' : 'bg-gray-400'} p-3 rounded-xl flex-row justify-center items-center`}>
                    <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Proceed</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default StepFive