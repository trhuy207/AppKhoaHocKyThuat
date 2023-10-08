import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    // Body
    body: {
        flex:1,
        alignItems: 'center',
    },

    // Card 
    card: {
        width: '80%',
        backgroundColor: '#d3dde4',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 20,
        alignItems: 'center'
    },

    btn: {
        backgroundColor: '#5DA3FA',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        width: '90%',
        alignItems: 'center'
    },

    btnText: {
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
})

export default styles