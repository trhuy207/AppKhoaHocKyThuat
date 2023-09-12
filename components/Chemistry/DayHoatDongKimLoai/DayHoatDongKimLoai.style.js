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
    },

    dayHoatDong: {
        flexDirection: 'row'
    },

    kimLoaiManh: {
        padding:10
    },

    kimLoaiTrungBinh: {
        padding:10
    },

    hydro: {
        padding:10
    },

    kimLoaiYeu: {
        padding: 10
    }, 
    
    titleKLM: {
        padding: 15,
        backgroundColor: '#0369a1',
        borderRadius: 10,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
        marginLeft: 5
    },

    titleKLTB: {
        padding: 15,
        backgroundColor: '#0381c7',
        borderRadius: 10,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
        marginLeft: 5
    },

    titleKLY: {
        padding: 15,
        backgroundColor: '#0399ed',
        borderRadius: 10,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
        marginLeft: 5
    },

    titleH: {
        padding: 15,
        alignSelf: 'flex-start',
        fontSize: 18,
    },

    content: {
        flexDirection: 'row',
    },

    contentKLM: {
        padding: 15,
        backgroundColor: '#0369a1',
        borderRadius: 10,
        margin: 5,
        fontSize: 15,
        color: '#fff'
    },

    contentKLM1: {
        padding: 10,
        marginLeft: 10,
        fontSize: 15,
    },

    contentKLTB: {
        padding: 15,
        backgroundColor: '#0381c7',
        borderRadius: 10,
        margin: 5,
        fontSize: 15,
        color: '#fff'
    },

    contentKLTB1: {
        padding: 10,
        marginLeft: 10,
        fontSize: 15,
    },

    contentH: {
        padding: 15,
        backgroundColor: '#4b5563',
        borderRadius: 10,
        margin: 5,
        fontSize: 15,
        color: '#fff'
    },

    contentH1: {
        padding: 10,
        marginLeft: 4,
        fontSize: 15,
    },

    contentKLY: {
        padding: 15,
        backgroundColor: '#0399ed',
        borderRadius: 10,
        margin: 5,
        fontSize: 15,
        color: '#fff'
    },

    contentKLY1: {
        padding: 10,
        marginLeft: 6,
        fontSize: 15,
    },
})

export default styles