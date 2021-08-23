import React from "react";
import { 
    View, 
    Text, 
    Image,
    ImageBackground, 
    Pressable  
} from "react-native";
import styles from './styles';


const Review = (props) => {
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                {/* Tag */}
           <Pressable
                style={styles.tagButtonLG}
                onPress={() => console.warn( {data: 'Light Green'})}
                >
                    
                    <Text
                    style={styles.buttonText}>2</Text>
                </Pressable>
           {/* Title */}
           <Text style={styles.reviewTitle}>Asked Me to Put On A Mask</Text>
           </View>
                {/* User & Date */}
                <View style={{flexDirection: 'row'}}>
           <Text style={styles.reviewName}>Anna</Text>
        
           <Text style={styles.reviewDate}>20/08/2021</Text>
           </View>
           {/* Description */}
           <Text style={styles.reviewText}>Apparently there might have been some confusion with the local ordinances but just so everyone knows they asked me to put on a mask while not seated.</Text>

        </View>
    );
};

export default Review;