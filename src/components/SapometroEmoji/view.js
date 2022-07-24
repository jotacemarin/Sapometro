import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

export const SapometroEmoji = ({height, percent = 0}) => {
  const emojiContainer = {height: `${height}%`};
  const percentScreen = percent * 100;

  return (
    <View style={[styles.emojiContainer, emojiContainer]}>
      <Text style={[styles.textColor, styles.textSize]}>Frog detected!</Text>
      <Text style={styles.emojiSize}>🐸</Text>
      <Text style={[styles.textColor, styles.textPercentSize]}>
        {percentScreen.toFixed(0)}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emojiContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  emojiSize: {
    fontSize: Dimensions.get('window').width / 2,
  },
  textColor: {
    color: 'white',
  },
  textSize: {
    fontSize: 48,
  },
  textPercentSize: {
    fontSize: Dimensions.get('window').width / 4,
  },
});

export default SapometroEmoji;
