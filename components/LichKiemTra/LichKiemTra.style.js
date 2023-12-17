import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },

    textInput: {
        borderWidth: 2,
        borderColor: "#1e90ff",
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    
    btnAdd: {
        backgroundColor: '#000',
        borderRadius: 6,
        paddingVertical: 8,
        marginVertical: 34,
        alignItems: 'center'
    },

    btnText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20
    },

    todosList: {
        backgroundColor: '#1e90ff',
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 12,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },

    todosListText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '800',
        flex: 1
    },
})

export default styles