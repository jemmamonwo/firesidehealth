import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    title: {
color: 'white',
fontSize: 100,
fontWeight: 'bold',
width: '85%',
marginLeft: 20
    },

    button: {
        backgroundColor: 'white',
        width: 200,
        marginLeft: 25,
        height: 40,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 25
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    searchButton: {
        backgroundColor: 'white',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        borderRadius:30,
        marginHorizontal: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center",
        position: 'absolute',
        top: 20,
        zIndex: 100
    },
    searchButtonText: {
        fontSize: 20,
        fontWeight: "bold"
    }

});


export default styles; 