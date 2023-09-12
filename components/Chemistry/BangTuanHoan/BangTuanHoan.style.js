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
        width: 130,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 0.25,
        fontSize: 16
    },

    tableHeaderText1: {
        width: 130,
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
        padding: 8,
        borderWidth: 0.25,
        width: 130,
        fontWeight: 'bold',
        height: "auto",
        fontSize: 18,
        backgroundColor: '#fff'
    },

    tableBodyText1: {
        padding: 8,
        width: 130,
        fontWeight: 'bold',
        height: "auto",
        fontSize: 18
    },

    tableBodyTextKhac: {
        padding: 8,
        borderWidth: 0.25,
        borderBottomWidth: 0,
        width: 130,
        fontWeight: 'bold',
        height: "auto",
        fontSize: 18
    },

    tableBodyTextKhac1: {
        padding: 8,
        width: 130,
        fontWeight: 'bold',
        height: "auto",
        fontSize: 18
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
        borderWidth: 0.25,
        width: 180,
        fontWeight: 'bold',
        height: "auto",
        fontSize: 18
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