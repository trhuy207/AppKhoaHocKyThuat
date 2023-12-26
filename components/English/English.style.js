import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#c0d3f7'
    },

    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },

    button: {
        width: 170,
        height: "auto",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#8d60bd'
    },

    btnImage: {
        width: 100,
        height: 100,
    },

    btnText: {
        padding: 8,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#8d60bd',
    },
})

export default styles