import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    // Body
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#e2e2e2',
    },

    tableHeaderText: {
        width: 90,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16
    },

    tableHeaderText1: {
        width: 90,
        fontWeight: 'bold',
        height: "auto",
        fontSize: 16,
        textAlign: 'center'
    },

    tableBody: {
        flexDirection: 'row',
    },

    tableBodyKhac: {
        flexDirection: 'row',
        marginTop: 20
    },

    tableBodyText: {
        padding: 20,
        borderWidth: 0.25,
        width: 90,
        fontWeight: 'bold',
        height: "auto",
        fontSize: 14
    },

    tableBodyTextKhac: {
        padding: 20,
        borderWidth: 0.25,
        borderBottomWidth: 0,
        width: 90,
        fontWeight: 'bold',
        height: "auto",
        fontSize: 14
    },
})

export default styles