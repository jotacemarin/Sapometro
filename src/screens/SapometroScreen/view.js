import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import SapometroButton from '../../components/SapometroButton';
import SapometroGraph from '../../components/SapometroGraph';
import SapometroEmoji from '../../components/SapometroEmoji';

const isProd = false;

const graphicsHeight = 84;
const multiplier = 0.01;
const max = 1;

export const calculatePercent = (buttonWidth, panTranslateX) => {
  const rawPercent = (panTranslateX * 100) / buttonWidth;
  const interval = rawPercent * multiplier;
  return interval < max ? interval : max;
};

export const SapometroScreen = () => {
  const [panTranslateX, setPanTranslateX] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (buttonWidth) {
      const showPercent = calculatePercent(buttonWidth, panTranslateX);
      setPercent(showPercent);
    }
  }, [buttonWidth, panTranslateX]);

  const translateX = useSharedValue(0);

  const animatedTranslateX = useAnimatedStyle(() => ({
    transform: [{translateX: Number(translateX.value)}],
  }));

  const setTranslateX = result => setPanTranslateX(result);

  useDerivedValue(() => {
    runOnJS(setTranslateX)(Math.abs(translateX.value));
  });

  const renderGraphics = () => {
    if (percent === max) {
      return <SapometroEmoji height={graphicsHeight} />;
    }

    return <SapometroGraph height={graphicsHeight} percent={percent} />;
  };

  return (
    <GestureHandlerRootView style={styles.handlerGesture}>
      <View style={styles.display}>
        {renderGraphics()}

        <Animated.View style={[styles.translateX, animatedTranslateX]} />

        <SapometroButton
          height={16}
          setButtonWidth={setButtonWidth}
          translateX={translateX}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  handlerGesture: {flex: 1},
  display: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  translateX: {
    height: 2,
    width: 60,
    backgroundColor: isProd ? 'white' : 'red',
  },
});

export default SapometroScreen;
