import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from './src/Button'

export default function App() {
  return (
    <SafeAreaProvider style={styles.wrapper}>
      <View style={styles.container}>
        <Button />
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
  }
});

