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

    table: {
        
    },

    row: {
        flexDirection: 'row',
    },

    rowChildTitle: {
        borderWidth: 0.5,
        backgroundColor: '#284387',
        height: 'auto',
        alignItems: 'center',
        borderColor: '#c8e1ff'
    },

    rowChild: {
        borderWidth: 0.5,
        height: 'auto',
        alignItems: 'center',
        borderColor: '#c8e1ff'
    },

    rowTitle: {
        padding: 10,
        margin: 2,
        color: 'white',
        textAlign: 'center'
    },
    
    rowText: {
        padding: 10,
        margin: 2,
        textAlign: 'center'
    },
})

export default styles