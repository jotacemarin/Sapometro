import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export const Ball = () => {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offset.value.x},
        {translateY: offset.value.y},
        {scale: withSpring(isPressed.value ? 1.2 : 1)},
      ],
      backgroundColor: isPressed.value ? 'yellow' : 'blue',
    };
  });

  const logger = () => console.log('tap');

  const gestureTap = Gesture.Tap()
    .enabled(true)
    .onBegin(logger)
    .onStart(logger);

  const gesturePan = Gesture.Pan()
    .onBegin(() => {
      'worklet';
      isPressed.value = true;
    })
    .onChange(e => {
      'worklet';
      offset.value = {
        x: e.changeX + offset.value.x,
        y: e.changeY + offset.value.y,
      };
    })
    .onFinalize(() => {
      'worklet';
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={gestureTap}>
      <Animated.View style={[styles.ball, animatedStyles]} />
    </GestureDetector>
  );
};

export default Ball;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});
