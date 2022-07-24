import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

export const SapometroScreen = ({translateX, setButtonWidth, height = 16}) => {
  const buttonContainer = {height: `${height}%`};

  const gesture = Gesture.Pan()
    .onBegin(() => console.log('onBegin'))
    .onUpdate(({translationX}) => {
      translateX.value = translationX.toFixed(0);
      console.log('onUpdate');
    })
    .onEnd(() => {
      translateX.value = 0;
      console.log('onEnd');
    });

  const onLayout = ({nativeEvent}) => {
    const {
      layout: {width},
    } = nativeEvent;
    const normalWidth = width / 7;
    setButtonWidth(normalWidth);
  };

  return (
    <View style={[styles.buttonContainer, buttonContainer]}>
      <GestureDetector gesture={gesture}>
        <View style={styles.button} collapsable={false} onLayout={onLayout}>
          <Text style={styles.text}>🐸</Text>
        </View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    padding: 10,
    paddingTop: 8,
    backgroundColor: 'rgba(0, 0, 0, .4)',
  },
  button: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 42,
    color: 'white',
    paddingBottom: 8,
  },
});

export default SapometroScreen;
