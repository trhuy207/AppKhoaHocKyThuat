import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    grp: {
        flexDirection: 'column',
    },

    rowTitle1: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        margin: 2
    },

    sub: {
        fontWeight: 'bold',
        fontSize: 13,
        marginVertical: -2,
        color: 'white',
    },

    subTop: {
        fontWeight: 'bold',
        fontSize: 13,
        marginVertical: -2,
        color: 'white',
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
        textAlign: 'center',
        fontWeight: 'bold'
    },
    
    rowText: {
        padding: 10,
        margin: 2,
        textAlign: 'center'
    },
})

export default styles