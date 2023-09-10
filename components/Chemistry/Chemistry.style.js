import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },

    CauHinhElectronBtn: {
        width: 180,
        height: "auto",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#8d60bd'
    },

    CauHinhElectronImage: {
        width: 80,
        height: 80,
    },

    CauHinhElectronBtnText: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8d60bd'
    },
})

export default styles