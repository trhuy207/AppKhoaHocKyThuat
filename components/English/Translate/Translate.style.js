import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerTitle: {
        fontSize: 40,
        fontWeight: '800',
        color: '#12afd4'
    },

    body: {
        alignItems: 'center'
    },

    textInput: {
        height: 150,
        width: '90%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#4a15ad',
        color: '#000',
        padding: 10,
        marginTop: 50
    },

    translateBtn: {
        backgroundColor: '#026efd',
        width: 200,
        height: 50,
        marginTop: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 20,
        marginTop: 25,
    },

    text: {
        fontSize: 20
    }
})

export default styles