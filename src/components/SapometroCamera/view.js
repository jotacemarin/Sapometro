import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import useCameraPermissions from '../../hooks/useCameraPermissions';

export const SapometroCamera = ({height = 84}) => {
  const {cameraPermission, requestCameraPermission} = useCameraPermissions();

  useEffect(() => {
    if (!cameraPermission) {
      requestCameraPermission();
    }
  }, [cameraPermission, requestCameraPermission]);

  const devices = useCameraDevices();
  const device = devices.back;

  const cameraContainer = {height: `${height}%`};

  if (!device) {
    return (
      <View style={[styles.cameraLoaderContainer, cameraContainer]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Camera
      style={StyleSheet.absoluteFillObject}
      device={device}
      isActive={true}
    />
  );
};

const styles = StyleSheet.create({
  cameraLoaderContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SapometroCamera;
