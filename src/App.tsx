import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import PlacesList from './screens/PlacesList';
import { RootStackParamList } from './routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient/index.android.js';

type NewPlaceScreenProp = NativeStackNavigationProp<RootStackParamList, 'NewPlace'>;

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDqyn2EJUsl5RBh3h-4FVHMAMEBPm99McA",
    authDomain: "findoil-fef28.firebaseapp.com",
    projectId: "findoil-fef28",
    storageBucket: "findoil-fef28.appspot.com",
    messagingSenderId: "396037750137",
    appId: "1:396037750137:web:80ecaecc340b0f9c1683a8",
    measurementId: "G-MLJYQDQG47",
    databaseURL: '',
  });
}

const App = () => {
  const navigation = useNavigation<NewPlaceScreenProp>();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      height: '100%',
      alignItems: 'center',
    }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <LinearGradient 
        colors={['#110233', '#580979', '#4c258c']}
        style={{
          flex: 1,
          width: '100%',
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <PlacesList />
        <FloatingAction
          shadow={{shadowOpacity: 0.9, shadowOffset: { width: 2, height: 5 }, shadowColor: "#000000", shadowRadius: 5}}
            color='#b470f0'
            onPressMain={() => navigation.navigate('NewPlace')}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default App;
