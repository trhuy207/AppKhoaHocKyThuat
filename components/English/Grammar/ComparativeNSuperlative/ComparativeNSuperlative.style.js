import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    // body
    card: {
        alignItems: 'center'
    },
    
    cardElement: {
        width: '90%',
        height: 'auto',
        borderWidth: 1,
        margin: 10,
        borderColor: '#6A1B4D',
        borderWidth: 1.25,
        borderRadius: 10
    },

    cardHeader: {
        margin: 5
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 17.5,
        color: '#000080'
    },

    cardContent: {
        margin: 5
    },

    contentTitle: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 3
    },

    contentCT: {
        fontSize: 15,
        margin: 3,
        color: '#f50010',
        fontWeight: 'bold'
    },

    contentText: {
        // color: '#0084ff',
        fontSize: 15,
        margin: 3,
    },

    hideShowBtnText: {
        color: 'blue',
        fontStyle: 'italic'
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
        width: 120,
        fontWeight: 'bold',
        fontSize: 16
    },

    tableHeaderText1: {
        padding: 10,
        borderWidth: 0.25,
        textAlign: 'center',
        width: 145,
        fontWeight: 'bold',
        fontSize: 16
    },

    tableHeaderText2: {
        padding: 10,
        borderWidth: 0.25,
        textAlign: 'center',
        width: 100,
        fontWeight: 'bold',
        fontSize: 16
    },

    tableBodyText: {
        width: 120,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16,
        height: 'auto',
        padding: 5
    },

    tableBodyText1: {
        width: 145,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16,
        height: 'auto',
        padding: 5
    },

    tableBodyText2: {
        width: 100,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16,
        height: 'auto',
        padding: 5
    },
})

export default styles