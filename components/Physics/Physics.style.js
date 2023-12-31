import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf2d7'
    },

    body: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn: {
        width: '60%',
        height: "auto",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1.5,
        borderColor: '#8d60bd',
        alignItems: 'center',
        backgroundColor: '#1aa6c1'
    },

    btnImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        borderColor: '#efcfe3',
        borderWidth: 1.5,
        margin: 5
    },

    btnText: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        color: '#fcef04',
    },
})

export default styles