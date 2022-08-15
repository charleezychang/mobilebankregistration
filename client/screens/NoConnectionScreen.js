import { View, Text } from 'react-native'
import { StatusOfflineIcon } from "react-native-heroicons/solid";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const NoConnectionModal = () => {
  return (
    <SafeAreaView className='flex-1 bg-[#121212] flex-column justify-center items-center'>
        <StatusOfflineIcon fill="white" size={70}/>
      <Text className='text-white text-2xl mt-2'>No internet connection.</Text>
    </SafeAreaView>
  )
}

export default NoConnectionModal