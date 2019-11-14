/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./src/img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./src/img/midway.jpg'),
  },
];


const App: () => React$Node = () => {
  let moviesArr = [];
  for (let i = 0; i < MOVIES_DATA.length; i++) {
    let movie = MOVIES_DATA[i];
    moviesArr.push(<Text key={movie.title}>{movie.title}</Text>);
    moviesArr.push(<Text key={movie.year}>{movie.year}</Text>);
    moviesArr.push(<Image source={movie.poster} />);

    console.log(moviesArr);

  }
  return (
      <ScrollView>
    <View style={StyleSheet.body}>
      <View style={StyleSheet.sectionContainer}>{moviesArr}</View>
        <Text>Scroll me please</Text>
    </View>
</ScrollView>
  );
};

export default App;
