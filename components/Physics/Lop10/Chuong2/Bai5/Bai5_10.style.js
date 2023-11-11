import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontWeight: "bold",
        margin: 3
    },

    contentCT: {
        fontSize: 15,
        margin: 3,
        color: '#f50010',
        fontWeight: 'bold'
    },

    contentText: {
        fontSize: 15,
        margin: 3,
    },

    contentTextBold: {
        fontWeight: 'bold',
        fontSize: 15,
        margin: 3,
    },

    hideShowBtnText: {
        color: 'blue',
        fontStyle: 'italic'
    }
})

export default styles