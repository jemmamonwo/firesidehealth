import React, {useState} from "react";
import { 
    View, 
    Text, 
    Image,
    ImageBackground, 
    Pressable,
    FlatList,  
    TextInput
} from "react-native";

import feed from "../../../assets/data/feed";
import categories from "../../../assets/data/categories";
import styles from "./styles"
import dummySearch from "../../../assets/data/dummySearch";

const DestinationSearchScreen = (props) => {
    const category = categories
    const [inputText, setInputText] = useState({initialState:''});
    
    return(
        <View style={styles.container}>
{/*Input component */}

{/*List of destinations*/}
<TextInput
style={styles.textInput}
placeholder="Where are you headed?"
value={inputText}
onChangeText={setInputText}
/>

<FlatList

data={dummySearch}
renderItem={({item}) => <Text>{item.description}</Text>}/>
        </View>
    );
}

export default DestinationSearchScreen;