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
        alignItems: 'center',
    },

    // Card 
    card: {
        width: '80%',
        backgroundColor: '#d3dde4',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 20,
        alignItems: 'center'
    },

    btn: {
        backgroundColor: '#5DA3FA',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        width: '90%',
        alignItems: 'center'
    },

    btnText: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
})

export default styles