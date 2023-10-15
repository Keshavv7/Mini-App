import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Button() {
  const [clickCount, setClickCount] = useState(0);
  const handleClickAdd = () => {
    setClickCount(clickCount + 1);
  };
  const handleClickSub = () => {
    setClickCount(clickCount - 1);
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity 
        style={[styles.container, styles.clicked]}
        onPress={handleClickAdd}
      >
          <Text style={[styles.button, styles.clickedText]}>
              Add
          </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.container, styles.clicked]}
        onPress={handleClickSub}
      >
          <Text style={[styles.button, styles.clickedText]}>
              Sub
          </Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{clickCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: 100,
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, 
    margin: 5
  },
  button: {
    alignContent: 'center',
    fontFamily: 'sans-serif',
    color: 'white'
  },
  clickedText: {
    color: 'white'
  },
  countText: {
    marginTop: 10,
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
    textDecorationStyle: 'solid'
  }
});

