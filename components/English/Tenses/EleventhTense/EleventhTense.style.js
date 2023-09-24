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
        flex:1,
    },

    // Formula 
    formulaCard: {
        width: '100%',
        backgroundColor: '#d3dde4',
        justifyContent: 'center',
        marginTop: 15,
        borderRadius: 20,
    },

    formulaTitle: {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: '#800080'
    },

    formulaContentTitle: {
        fontSize: 18,
        fontWeight:'bold',
        marginLeft: 10,
    },

    formulaContent: {
        paddingBottom: 5,
        fontSize: 16,
        marginLeft: 10,
    },

    // Note card
    noteCard: {
        width: '100%',
        backgroundColor: '#d3dde4',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 10,
        borderRadius: 20,
    },

    noteCardTitle: {
        marginLeft: 5,
        padding: 5,
        fontSize: 20,
        fontWeight: "bold",
        color: '#800080'
    },

    noteCardText: {
        fontSize: 16,
        marginLeft: 10,
        paddingBottom: 5
    },

    noteCardEx: {
        fontSize: 14,
        marginLeft: 10,
        fontStyle: 'italic',
        marginBottom: 5
    }
})

export default styles