import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, NoCameraDeviceError } from 'react-native-vision-camera';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import indexstyle from '../styles/IndexStyle';


export default function IndexScreen() {
    const { hasPermission, requestPermission } = useCameraPermission();
    const device = useCameraDevice('back');

    useEffect(() => {
        if (!hasPermission){
            requestPermission();
        }

    }, [hasPermission]);

    if (!hasPermission){
        return <ActivityIndicator />;
    }

    if (device == null) return <NoCameraDeviceError />

    return (
        <View style={indexstyle.container}>
            <Camera style={StyleSheet.absoluteFill} device={device} isActive={true}/>
        </View>
        
    );
};