import { Text, ImageBackground, View, Image } from 'react-native';

export default function Card(props) {
    return (
        <ImageBackground source={props.bg} className='h-52 w-[300px] rounded-xl p-4 mx-1.5 flex-row justify-between'>
            <View className='flex-column justify-between'>
                <View>
                    <Text className='text-2xl font-bold text-white'>{props.title}</Text>
                    <Text className='text-white text-base'>{props.number}</Text>
                    <Text className='text-white text-base'>{props.expiry}</Text>
                </View>
                <View>
                    <Text className='text-white text-3xl font-[sans-serif-light]'><Text className='font-bold font-[sans-serif-medium]'>{props.currency} {props.amount.split('.')[0]}</Text>.{props.amount.split('.')[1]}</Text>
                </View>

            </View>
            <View className='flex-column justify-between'>
                <View className='items-end'>
                    {props.digital && <Image source={props.digital}/>}
                    {props.touch && <Image source={require('../../assets/CardsTab_Images/touch.png')} className='mt-2' />}
                </View>
                <View className='items-end'>
                    <Image source={props.card} className='mt-2' />
                </View>
            </View>
        </ImageBackground>
    )
}