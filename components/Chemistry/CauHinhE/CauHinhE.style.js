import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    searchBar: {
        width: '80%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1.5,
        alignSelf: 'center',
        margin: 5
    },

    searchBox: {
        padding: 5
    }
})

export default styles