import {useEffect, useState} from 'react';
import {Camera} from 'react-native-vision-camera';
export const useCameraPermissions = () => {
  const [cameraPermission, setCameraPermission] = useState(undefined);

  async function getCameraPermissionStatus() {
    const currentCameraPermission = await Camera.getCameraPermissionStatus();
    setCameraPermission(currentCameraPermission);
  }

  async function requestCameraPermission() {
    const newCameraPermission = await Camera.requestCameraPermission();
    setCameraPermission(newCameraPermission);
  }

  useEffect(() => {
    getCameraPermissionStatus();
  }, []);

  return {cameraPermission, requestCameraPermission};
};

export default useCameraPermissions;
