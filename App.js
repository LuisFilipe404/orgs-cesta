import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native'; // Mudar a statusbar e adicionaro SafeAreaView para iphone
import Cesta from './src/components/cesta';
import mock from './src/mocks/cesta'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontecarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontecarregada) {
    return <AppLoading/>
  } // esperar o carregamento da fonte

  return (
    <SafeAreaView style={ { flex: 1 }}>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}