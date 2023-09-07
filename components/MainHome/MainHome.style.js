import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: "90%",
        marginBottom: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    ChemistryBtn: {
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#049dff',
        alignItems: 'center'
    },

    ChemistryBtnImage: {
        width: 80,
        height: 80,
    },

    ChemistryBtnText: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    PhysicsBtn: {   
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#049dff',
        alignItems: 'center'
    },

    PhysicsBtnImage: {
        width: 80,
        height: 80,
    },

    PhysicsBtnText: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    EnglishBtn: {
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#049dff',
        alignItems: 'center'
    },

    EnglishBtnImage: {
        width: 80,
        height: 80,
    },

    EnglishBtnText: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
})

export default styles