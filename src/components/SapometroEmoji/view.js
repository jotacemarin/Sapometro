import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

export const SapometroEmoji = ({height}) => {
  const graphContainer = {height: `${height}%`};

  return (
    <View style={[styles.emojiContainer, graphContainer]}>
      <Text style={styles.emojiSize}>🐸</Text>
      {true && <Text style={styles.emojiSize}>🐶</Text>}
      {true && <Text style={styles.emojiSize}>💩</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  emojiContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiSize: {
    fontSize: Dimensions.get('window').width / 2,
  },
});

export default SapometroEmoji;
