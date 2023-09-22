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
    body: {
        marginTop: 20
    },

    table: {
        flexDirection: 'row'
    },

    tableBodyColumn: {
        
    },

    tableColumnText: {
        padding: 8,
        borderWidth: 0.25,
        width: 80,
        fontWeight: 'bold',
        height: 100,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5
    },

    tableColumnHeader: {
        width: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 14,
        height: 45,
        backgroundColor: '#e2e2e2',
        borderWidth: 0.5
    },

    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#e2e2e2',
    },

    tableHeaderText: {
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        height: 45,
    },

    tableHeaderText1: {
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        textAlign: 'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderLeftWidth: 0.5
    },

    tableHeaderText12: {
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        textAlign: 'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },

    tableHeaderText13: {
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        textAlign: 'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5
    },

    tableBody: {
        flexDirection: 'row',
    },

    tableBodyKhac: {
        flexDirection: 'row',
        marginTop: 20
    },

    tableBodyText: {
        padding: 8,
        borderWidth: 0.5,
        width: 130,
        fontWeight: 'bold',
        height: 100,
        fontSize: 16,
        backgroundColor: '#fff'
    },

    tableBodyText1: {
        padding: 8,
        width: 130,
        fontWeight: 'bold',
        height: 100,
        fontSize: 16
    },

    tableBodyTextKhac: {
        padding: 8,
        borderWidth: 0.5,
        borderBottomWidth: 0,
        width: 130,
        fontWeight: 'bold',
        height: 100,
        fontSize: 16
    },

    tableBodyTextKhac1: {
        padding: 8,
        width: 130,
        fontWeight: 'bold',
        height: 100,
        fontSize: 16
    },

    // Chú Thích
    chuThich: {
        marginTop: 10
    },

    chuThichNT: {
        marginLeft: 10,
        marginBottom: 10
    },

    chuThichNTText: {
        padding: 8,
        borderWidth: 0.5,
        width: 'auto',
        fontWeight: 'bold',
        height: 'auto',
        fontSize: 16,
        alignSelf: 'flex-start'
    },

    chuThichNTBlock: {
        flexDirection: 'row',
    },

    chuThichKL: {
        marginRight: 20
    },

    chuThichAK: {
        marginRight: 20
    },

    chuThichPK: {
        marginRight: 20
    },
    
    chuThichCR: {
        marginRight: 20
    },
})

export default styles