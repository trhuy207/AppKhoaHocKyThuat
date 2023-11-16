import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    body: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn: {
        width: 300,
        height: "auto",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1.5,
        borderColor: '#8d60bd',
        alignItems: 'center',
        backgroundColor: '#cdd1e4'
    },

    btnText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center'
    },
})

export default styles