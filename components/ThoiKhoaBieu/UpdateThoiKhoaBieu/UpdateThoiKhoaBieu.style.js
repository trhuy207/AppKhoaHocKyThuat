import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },

    card: {
        padding: 10
    },

    row: {
        flexDirection: 'row',
    },

    rowChildTitle: {
        borderWidth: 0.5,
        backgroundColor: '#284387',
        height: 'auto',
        alignItems: 'center',
        borderColor: '#c8e1ff',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: 10
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
        fontSize: 16
    },

    rowTitle1: {
        padding: 10,
        margin: 2,
        color: 'white',
        textAlign: 'center',
    },
    
    rowText: {
        padding: 10,
        margin: 2,
        textAlign: 'center'
    },

    btnUpdate: {
        alignSelf: 'flex-end'
    }
})

export default styles