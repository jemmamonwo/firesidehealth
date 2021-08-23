import React from "react";
import { 
    View, 
    Text, 
    Image,
    ImageBackground, 
    Pressable,
    FlatList  
} from "react-native";
import Review from "../../components/reviews";
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ListingResult from "../../components/listingResult";
import feed from "../../../assets/data/feed";
import categories from "../../../assets/data/categories";

const ListingSearch = (props) => {
    const category = categories
    return(
        <View>
            <FlatList data={feed}
            renderItem={({item}) => <ListingResult listing={item} />}
            >
              
            </FlatList>
<ListingResult/>
<ListingResult/>
<ListingResult/>

        </View>
    );
};

export default ListingSearch;