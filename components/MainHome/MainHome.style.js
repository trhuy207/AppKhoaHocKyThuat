import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },

    ChemistryBtn: {
        width: 180,
        height: "auto",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#049dff',
        alignItems: 'center'
    },

    ChemistryBtnImage: {
        width: 80,
        height: 80,
    },

    ChemistryBtnText: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },

    PhysicsBtn: {   
        width: 180,
        height: "auto",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#049dff',
        alignItems: 'center'
    },

    PhysicsBtnImage: {
        width: 80,
        height: 80,
    },

    PhysicsBtnText: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },

    MathBtn: {
        width: 180,
        height: "auto",
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#049dff',
        alignItems: 'center'
    },

    MathBtnImage: {
        width: 80,
        height: 80,
    },

    MathBtnText: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },

    EnglishBtn: {
        width: 180,
        height: "auto",
        borderRadius: 10,
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
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
})

export default styles