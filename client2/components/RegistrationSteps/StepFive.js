
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const StepFive = () => {
    const [securityQuestion, setSecurityQuestion] = useState("Select one.");
    return (
        <View>
            <Text>StepFive</Text>
            <View className='flex-row items-center'>
                <Text>{securityQuestion}</Text>
                <Picker
                    className='bg-red-500'
                    selectedValue={securityQuestion}
                    onValueChange={(itemValue, itemIndex) =>
                        setSecurityQuestion(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>

        </View>
    )
}

export default StepFive