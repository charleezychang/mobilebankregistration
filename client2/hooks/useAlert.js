import { Alert } from 'react-native'

export const useAlert = ({ title, message, button }) => {
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
