import React from "react";
import { 
    View, 
    Text, 
    ImageBackground, 
    Pressable  
} from "react-native";
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = (props) => {
    return(
        <View>
            {/* search Bar */}
            <Pressable
                style={styles.searchButton}
                onPress={() => console.warn( {data: 'Search Btn clicked'})}
                >
                    <Fontisto name="search" size={25} color={"red"} />
                    <Text
                    style={styles.searchButtonText}>Where are you headed?</Text>
                </Pressable>

          
            <ImageBackground source={require('../../../assets/images/ash-blaze-bonfire-burn.jpg')} style={styles.image}>
                {/*  Title  */}
                <Text style={styles.title}>Let's Gather</Text>
                {/*  Button  */}
                <Pressable
                style={styles.button}
                onPress={() => console.warn( {data: 'Explore Btn clicked'})}
                >
                    
                    <Text
                    style={styles.buttonText}>Explore nearby spots</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;