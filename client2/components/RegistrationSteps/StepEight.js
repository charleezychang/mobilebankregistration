import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import phil from 'phil-reg-prov-mun-brgy'

const StepEight = ({ stepUpRegistration, stepDownRegistration, registrationStep, setAccount }) => {
    const [province, setProvince] = useState({})
    // const [region, setRegion] = useState({})
    const [municipality, setMunicipality] = useState({})
    const [barangay, setBarangay] = useState({})
    const [streetAddress, setStreetAdress] = useState("")
    const [isValidStreetAdress, setIsValidStreetAddress] = useState(true)

    const generalValidator = () => {
        if (Object.keys(province).length !== 0 && 
        Object.keys(municipality).length !== 0 &&
        Object.keys(barangay).length !== 0 &&
        streetAddress != "" &&
        isValidStreetAdress) {
            return true
        }
    }

    const proceedHandler = () => {
        setAccount(prevState => {
            return ({
                ...prevState,
                // region: region.name,
                province: province.name,
                municipality: municipality.name,
                barangay: barangay.name,
                streetAdress: streetAddress
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
            {/* <Text style={{ fontFamily: "Poppins-Regular" }} className=' self-start'>Please your details.</Text> */}
            {/* <View className='bg-gray-100 w-[100%] mb-2' style={{ fontFamily: "Poppins-Regular" }}>
                <Picker
                    selectedValue={region}
                    itemStyle={{ fontFamily: "Poppins-Regular" }}
                    onValueChange={(itemValue, itemIndex) => {
                        setRegion(itemValue)
                        // proceedHandler()
                    }}>
                    <Picker.Item label="Select Region." enabled={false} value={0} />
                    {phil.regions.map((region) => {
                        return <Picker.Item label={region.name} value={region} key={region.name} fontFamily={"Poppins-SemiBold"} style={{fontSize: 12}}/>
                    })}
                </Picker>
            </View> */}
            <View className='bg-gray-100 w-[100%] mb-2' style={{ fontFamily: "Poppins-Regular" }}>
                <Picker
                    selectedValue={province}
                    itemStyle={{ fontFamily: "Poppins-Regular" }}
                    onValueChange={(itemValue, itemIndex) => {
                        setProvince(itemValue)
                    }}>
                    <Picker.Item label="Select Province." enabled={false} value={0} />
                    {phil.sort(phil.provinces).map((province) => {
                        return <Picker.Item label={province.name} value={province} key={province.name} fontFamily={"Poppins-SemiBold"} />
                    })}
                </Picker>
            </View>
            <View className='bg-gray-100 w-[100%] mb-2' style={{ fontFamily: "Poppins-Regular" }}>
                <Picker
                    selectedValue={municipality}
                    itemStyle={{ fontFamily: "Poppins-Regular" }}
                    onValueChange={(itemValue, itemIndex) => {
                        setMunicipality(itemValue)
                    }}>
                    <Picker.Item label="Select Municipality." enabled={false} value={0} />
                    {phil.getCityMunByProvince(province.prov_code).map((municipality) => {
                        return <Picker.Item label={municipality.name} value={municipality} key={municipality.name} fontFamily={"Poppins-SemiBold"} />
                    })}
                </Picker>
            </View>
            <View className='bg-gray-100 w-[100%] mb-2' style={{ fontFamily: "Poppins-Regular" }}>
                <Picker
                    selectedValue={barangay}
                    itemStyle={{ fontFamily: "Poppins-Regular" }}
                    onValueChange={(itemValue, itemIndex) => {
                        setBarangay(itemValue)
                    }}>
                    <Picker.Item label="Select Barangay." enabled={false} value={0} />
                    {phil.getBarangayByMun(municipality.mun_code).map((barangay) => {
                        return <Picker.Item label={barangay.name} value={barangay} key={barangay.name} fontFamily={"Poppins-SemiBold"} />
                    })}
                </Picker>
            </View>
            <TextInput
                placeholder='Street Address'
                className={`border-b-2 text-xl w-[100%] py-1 px-2 ${!isValidStreetAdress && 'border-b-red-500'}`}
                onChangeText={(value) => {
                    if (value != "") {
                        setStreetAdress(value)
                        setIsValidStreetAddress(true)
                    }
                    else {
                        setStreetAdress(value)
                        setIsValidStreetAddress(false)
                    }
                }}
                style={{ fontFamily: "Poppins-Regular" }}
            />
            {streetAddress == '' && !isValidStreetAdress && <Text className='self-start text-red-500' style={{ fontFamily: "Poppins-Regular" }}>This is a required field.</Text>}
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
                    <Text className='text-white text-xl font-bold' style={{ fontFamily: "Poppins-SemiBold" }}>Proceed</Text>
                </Pressable>

            </View>
        </>
    )
}

export default StepEight