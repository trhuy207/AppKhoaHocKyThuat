import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
    // body
    card: {
        alignItems: 'center'
    },

    cardElement: {
        width: '80%',
        height: 'auto',
        padding: 8,
    },

    cardBtn: {
        borderWidth: 1,
        borderColor: '#6A1B4D',
        borderRadius: 10,
    },

    cardBtnText: {
        padding: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#03203C',
        textAlign: 'center'
    },
})

export default styles