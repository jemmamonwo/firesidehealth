import React from "react";
import { 
    View, 
    Text, 
    Image,
    ImageBackground, 
    Pressable  
} from "react-native";
import Review from "../reviews";
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ListingResult = (props) => {
    return(
        <View>
           {/* Image */}
           <View style={styles.container}>
<ImageBackground style={{ width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10, flexDirection: 'row', overflow: 'hidden'}} source={{ uri: 'https://images.pexels.com/photos/2995283/pexels-photo-2995283.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}} >
           
            
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
                    style={styles.catButtonText}>Restuarant</Text>
                </Pressable>

           {/* Tag and Category */}
           </ImageBackground>

            {/* Business Name */}
        <Text style={styles.listingName}>Savannah Bar and Grill</Text>
             {/* Address */}
             <Text style={styles.listingAddress}>3340 Roulege Street Savannah, GA 22403</Text>
             </View>
        </View>
    );
};

export default ListingResult;