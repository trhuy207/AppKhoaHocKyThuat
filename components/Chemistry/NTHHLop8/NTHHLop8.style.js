import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfcf4'
    },

    // Header
    header: {
        flexDirection:"row",
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 0.25,
        backgroundColor: 'white',
    },

    icon : {
        marginLeft: 20
    },

    headerTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 30,
    },

    // body
    body: {
        marginBottom: 50
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

    tableBodyText: {
        width: 110,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16,
        height: 'auto',
        padding: 5
    }
})

export default styles