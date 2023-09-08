import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#2c3e56'
    },

    card: {
        width: '80%',
        backgroundColor: '#d3dde4',
        justifyContent: 'center',
        marginTop: 15,
        borderRadius: 20,
        alignItems: 'center'
    },

    button: {
        backgroundColor: '#5DA3FA',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        width: '90%',
        alignItems: 'center'
    },

    btnText: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
})

export default styles