import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },

    card: {
        padding: 10
    },

    row: {
        flexDirection: 'row',
    },

    rowChildTitle: {
        borderWidth: 0.5,
        backgroundColor: '#30336b',
        height: 'auto',
        alignItems: 'center',
        borderColor: '#102543',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: 10
    },

    rowChild: {
        borderWidth: 0.5,
        height: 'auto',
        alignItems: 'center',
        borderColor: '#102543',
        borderRadius: 10
    },

    rowTitle: {
        padding: 10,
        margin: 2,
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },

    rowTitle1: {
        padding: 10,
        margin: 2,
        color: 'white',
        textAlign: 'center',
    },
    
    rowText: {
        padding: 10,
        margin: 2,
        textAlign: 'center'
    },

    btnUpdate: {
        alignSelf: 'flex-end',
    },

    lktPart: {
        alignItems: 'center'
    },

    btnLkt: {
        width: 170,
        height: "auto",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1.5,
        borderColor: '#8d60bd',
        alignItems: 'center'
    },

    btnLktText: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8d60bd'
    },
})

export default styles