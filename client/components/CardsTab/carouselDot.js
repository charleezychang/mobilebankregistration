import { View, Text, Image } from 'react-native'
import React from 'react'

const carouselDot = (props) => {
    return (
        <View className='p-1'>
            {props.active ? <Image source={require('../../assets/CardsTab_Images/activedot.png')}/> : <Image source={require('../../assets/CardsTab_Images/inactivedot.png')}/>}
        </View>
    )
}

export default carouselDot