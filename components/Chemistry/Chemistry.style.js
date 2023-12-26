import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#cbffe6'
    },

    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },

    Btn: {
        width: 170,
        height: "auto",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#8d60bd'
    },

    BtnImage: {
        width: 80,
        height: 80,
    },

    BtnText: {
        padding: 3,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#4a4fa0',
    },
})

export default styles