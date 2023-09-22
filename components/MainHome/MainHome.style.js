import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },

    Btn: {
        width: 170,
        height: "auto",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1.5,
        borderColor: '#8d60bd',
        alignItems: 'center'
    },

    BtnImage: {
        width: 80,
        height: 80,
    },

    BtnText: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8d60bd'
    },
})

export default styles