import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import { useEffect } from 'react';


const useCheckConnection = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.navigate('NoConnection')
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
}

export default useCheckConnection