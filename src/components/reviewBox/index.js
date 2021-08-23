import React from "react";
import { 
    View, 
    Text, 
    Image,
    ImageBackground, 
    Pressable  
} from "react-native";
import styles from './styles';


const Listing = (props) => {
    return(
        <View style={styles.container}>
           {/* Image */}
<ImageBackground style={{ width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10, flexDirection: 'row', overflow: 'hidden'}} source={{ uri: 'https://images.unsplash.com/photo-1610386613653-20e90bfb1200?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHN1cmYlMjBzd2ltJTIwYmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}} >
           
            
           {/* Tag */}
           <Pressable
                style={styles.tagButton}
                onPress={() => console.warn( {data: 'Green'})}
                >
                    
                    <Text
                    style={styles.buttonText}>1</Text>
                </Pressable>
                <Pressable
                style={styles.catButton}
                onPress={() => console.warn( {data: 'Green'})}
                >
                    
                    <Text
                    style={styles.catButtonText}>Hospitality</Text>
                </Pressable>

           {/* Tag and Category */}
           </ImageBackground>

            {/* Business Name */}
        <Text style={styles.listingName}>Savannah Bar and Grill</Text>
             {/* Address */}
             <Text style={styles.listingAddress}>3340 Roulege Street Savannah, GA 22403</Text>
            {/* Reviews */}

        </View>
    );
};

export default Listing;