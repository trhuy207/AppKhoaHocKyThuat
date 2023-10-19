import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    // body
    card: {
        alignItems: 'center'
    },
    
    cardElement: {
        width: '90%',
        height: 'auto',
        borderWidth: 1,
        margin: 10,
        borderColor: '#6A1B4D',
        borderWidth: 1.25,
        borderRadius: 10
    },

    cardHeader: {
        margin: 5
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 17.5,
        color: '#000080'
    },

    cardContent: {
        margin: 5
    },

    contentTitle: {
        fontSize: 16,
        fontWeight: "bold"
    },

    contentTitle1: {
        fontSize: 16
    },

    contentText: {
        color: '#0084ff',
        fontSize: 15.5,
        margin: 3,
        fontWeight: 'bold'
    },

    contentText1: {
        fontSize: 14.5,
        margin: 3,
        fontWeight: 'bold'
    },

    contentEx: {
        fontSize: 15,
        fontStyle: 'italic'
    },

    contentNote: {
        fontSize: 15.5,
        fontStyle: 'italic'
    },

    // hideShowBtn: {
    //     borderWidth: 0.5,
    //     alignSelf: 'flex-start',
    //     borderColor: '#6A1B4D',
    //     borderRadius: 5,
    //     marginLeft : 10,
    //     marginBottom: 5
    // },

    hideShowBtnText: {
        padding: 3,
        color: 'blue',
        fontSize: 12
    },
})

export default styles