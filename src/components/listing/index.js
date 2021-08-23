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

const Listing = (props) => {
    

    const listings = props.listings
    console.log(listings)
    console.log(props.category[0].image)
    return(
        <View>
           {/* Image */}
           <View style={styles.container}>
<ImageBackground style={{ width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10, flexDirection: 'row', overflow: 'hidden'}} source={{ uri: props.category[0].image}} >
           
            
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
                    style={styles.catButtonText}>Restaurant</Text>
                </Pressable>

           {/* Tag and Category */}
           </ImageBackground>

            {/* Business Name */}
        <Text style={styles.listingName}>Savannah Bar and Grill</Text>
             {/* Address */}
             <Text style={styles.listingAddress}>3340 Roulege Street Savannah, GA 22403</Text>
             </View>
            {/* Reviews */}
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.reviewHeader}>Reviews: 4 Ratings</Text>
            <Fontisto name="plus-a" size={25} color={"red"}  onPress={() => console.warn( {data: 'addR'})}/>
            </View>
            <Review/>
            <Review/>
            <Review/>
            <Review/>

        </View>
    );
};

export default Listing;