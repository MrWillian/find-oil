import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import PlacesList from './screens/PlacesList';
import { RootStackParamList } from './routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NewPlaceScreenProp = NativeStackNavigationProp<RootStackParamList, 'NewPlace'>;

const App = () => {
  const navigation = useNavigation<NewPlaceScreenProp>();
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
		if (!firebase || !firebase.apps || !firebase.apps.length)
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
	}, []); 

  return (
    <SafeAreaView style={{
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      height: '100%',
      alignItems: 'center',
    }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PlacesList />
      <FloatingAction
        onPressMain={() => navigation.navigate('NewPlace')}
      />
    </SafeAreaView>
  );
};

export default App;
