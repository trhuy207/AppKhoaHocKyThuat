import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eff5f7'
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
        borderColor: '#235190',
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
        color: '#235190'
    },

    title: {
        alignItems: 'center'
    },

    titleText: {
        fontSize: 45,
        fontWeight: '900',
        color: '#c62f52',
        paddingTop: 15
    }
})

export default styles