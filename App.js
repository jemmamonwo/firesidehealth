/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/home';
import Listing from './src/components/listing';
import ListingSearch from './src/screens/listingSearch';
import feed from './assets/data/feed';
import categories from './assets/data/categories';
import ListingResult from './src/components/listingResult';
import DestinationSearchScreen from './src/screens/destinationSearch/';


const listing1 = feed[0];
const category = categories

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={backgroundStyle}>
    <DestinationSearchScreen />
    </SafeAreaView>
    </>
  );
};



export default App;
