import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Button from './src/Button'

export default function App() {
  return (
    <SafeAreaProvider style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.view1}></View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
      flex: 1,
      marginTop:StatusBar.currentHeight
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view1: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

