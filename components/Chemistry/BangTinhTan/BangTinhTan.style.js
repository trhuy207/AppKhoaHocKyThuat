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

    // body
    table: {
        flexDirection: 'row'
    },

    chuThich: {
        flexDirection: 'row'
    },

    tanNhieu: {
        
    },

    itTan: {

    },

    khongTan: {

    },

    tanNhieuText: {
        padding: 10,
        backgroundColor: '#324579',
        fontSize: 16,
        margin: 10,
        color: '#fff'
    },

    itTanText: {
        padding: 10,
        backgroundColor: '#577e26',
        fontSize: 16,
        margin: 10,
        color: '#fff'
    },

    khongTanText: {
        padding: 10,
        backgroundColor: '#b24c38',
        fontSize: 16,
        margin: 10,
        color: '#fff'
    },

    // talbe
    talbeHeader: {
        flexDirection: "row"
    },

    tableBodyColumn: {
        flexDirection: 'column'
    },

    tableBody: {
        flexDirection: 'row',
    },

    tableHeaderText: {
        width: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16,
        height: 25
    },

    tableHeaderText1: {
        width: 80,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    tableBodyText: {
        width: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16,
        height: 25
    },

    tableBodyText1: {
        width: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        height: 25
    },

    tho: {
        marginTop: 20,
        marginLeft: 20,
    },
})

export default styles