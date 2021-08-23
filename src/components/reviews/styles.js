import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
    width: '95%',
    padding: 10,
    resizeMode: 'cover',
    borderRadius: 20, 
    margin: 10,
    overflow: 'hidden',
    backgroundColor: '#e0e0d1'
},
reviewTitle: {
    fontSize: 22,
    marginLeft: 15,
    height: 40,
},
reviewDate: {
    fontSize: 15,
    marginLeft: 15
},
reviewName: {
    fontSize: 15,
    marginLeft: 15
},
tagButtonLG: {
    backgroundColor: '#00ff80',
    fontSize: 16,
    width: 50,
    marginLeft: 15,
    height: 40,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: "center",
},
   buttonText: {
        fontSize: 26,
        fontWeight: "bold"
    },
reviewText: {
    fontSize: 18,
    margin: 15
}

})


export default styles; 