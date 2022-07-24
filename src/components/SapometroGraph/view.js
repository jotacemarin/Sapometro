import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';

const multiplier = 0.01;
const max = 1;
const limitDanger = 0.8;
const limitWarning = 0.6;

export const calculatePercent = (buttonWidth, panTranslateX) => {
  const rawPercent = (panTranslateX * 100) / buttonWidth;
  const interval = rawPercent * multiplier;
  return interval < max ? interval : max;
};

export const getColor = (percent = 0) => {
  if (percent > limitDanger) {
    return '255, 67, 54';
  }

  if (percent > limitWarning) {
    return '255, 179, 0';
  }

  return '26, 255, 146';
};

export const SapometroGraph = ({height = 84, percent}) => {
  const [color, setColor] = useState(getColor());

  useEffect(() => {
    const currentColor = getColor(percent);
    setColor(currentColor);
  }, [percent]);

  const chartConfig = {
    backgroundGradientFrom: 'transparent',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'transparent',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(${color}, ${opacity})`,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    width: Dimensions.get('window').width,
    height: 220,
  };

  const chartWidth = Dimensions.get('window').width;
  const chartHeight = Dimensions.get('window').height * 0.8;
  const chartRadius = chartHeight / 4;

  const chartData = {
    data: [percent],
  };

  const graphContainer = {height: `${height}%`};

  return (
    <View style={[styles.graphContainer, graphContainer]}>
      <ProgressChart
        chartConfig={{...chartConfig}}
        width={chartWidth}
        height={chartHeight}
        radius={chartRadius}
        strokeWidth={32}
        data={chartData}
        hideLegend={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  graphContainer: {
    width: '100%',
  },
});

export default SapometroGraph;
