import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfcf4'
    },

    // body
    body: {
    },

    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#D7F9FA',
    },

    tableBody: {
        flexDirection: 'row'
    },

    tableHeaderText: {
        padding: 10,
        borderWidth: 0.25,
        textAlign: 'center',
        width: 110
    },

    tableHeaderText1: {
        padding: 10,
        borderWidth: 0.25,
        textAlign: 'center',
        width: 60
    },

    tableHeaderText2: {
        padding: 10,
        borderWidth: 0.25,
        textAlign: 'center',
        width: 120
    },

    tableBodyText: {
        width: 110,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16,
        height: 'auto',
        padding: 5
    },

    tableBodyText1: {
        width: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16,
        height: 'auto',
        padding: 5
    },

    tableBodyText2: {
        width: 120,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16,
        height: 'auto',
        padding: 5
    },
})

export default styles