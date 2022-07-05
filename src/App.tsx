import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { useNavigation } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import PlacesList from './screens/PlacesList';
import { RootStackParamList } from './routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NewPlaceScreenProp = NativeStackNavigationProp<RootStackParamList, 'NewPlace'>;

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
      <PlacesList />
      <FloatingAction
        onPressMain={() => navigation.navigate('NewPlace')}
      />
    </SafeAreaView>
  );
};

export default App;
