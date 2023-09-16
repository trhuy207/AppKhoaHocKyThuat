import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

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

    contentText: {
        color: '#0084ff',
        fontSize: 15,
        margin: 3
    },

    contentNote: {
        fontSize: 15,
        fontStyle: 'italic',
        margin: 3
    },  

    contentEx: {
        fontSize: 15,
        fontStyle: 'italic'
    }
})

export default styles