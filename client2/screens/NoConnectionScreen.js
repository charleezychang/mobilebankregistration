import { View, Text, Pressable } from 'react-native'
import { StatusOfflineIcon } from "react-native-heroicons/solid";
import React, { useEffect, useState } from 'react'
import NetInfo from "@react-native-community/netinfo";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NoConnectionScreen = () => {
    const navigation = useNavigation()
    const [toggleRefresh, setToggleRefresh] = useState(false)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            if (state.isConnected == true) { 
                navigation.goBack();
            }
        });

        return () => {
            unsubscribe();
        }
    }, [toggleRefresh])

    const handleRefresh = () => {
        setToggleRefresh(!toggleRefresh)
    }

    return (
        <SafeAreaView className='flex-1 bg-black flex-column justify-center items-center'>
            <StatusOfflineIcon fill="white" size={70} />
            <Text className='text-white text-2xl mt-2'>No internet connection.</Text>
            <Pressable onPress={handleRefresh} className='bg-white rounded-md py-1 px-5 mt-4'>
                <Text className=' text-2xl'>Refresh</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default NoConnectionScreen