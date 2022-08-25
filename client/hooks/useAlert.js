import { Alert } from 'react-native'

const useAlert = ({ title, message, button }) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: button,
                onPress: () => {
                },
                style: "cancel",
            },
        ]
    )
}

export default useAlert