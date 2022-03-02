//import liraries
import { Camera } from 'expo-camera';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// create a component
const Cam = () => {

    const [cameraPermission, setCameraPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    useEffect(() => {
        (async () => {
            const permission = await Camera.requestCameraPermissionsAsync();
            setCameraPermission(permission.granted);
        })();
    }, []);

    function toggleCameraType() {
        if (type === Camera.Constants.Type.back) {
            setType(Camera.Constants.Type.front);
        } else {
            setType(Camera.Constants.Type.back);
            
        }
    }

    if (!cameraPermission) {
        return (
            <View>
                <Text>No access to camera</Text>
            </View>
        );     
    } else {
        return (
             <View  style={styles.container}>
                <Camera
                    style={styles.camera}
                    type={type} >
                    <View >
                        <TouchableOpacity onPress={toggleCameraType}>
                            <MaterialIcons
                                name='flip-camera-ios'
                                size={50}
                                color='green'
                            />
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <MaterialIcons
                                name='camera'
                                size={50}
                                color='red'
                            />
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
           

        );
    }



    return (

        <View style={styles.container}>
            <Text>Ma page camera</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },

    camera: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    icons_container: {
        display: "flex",
        flexDirection: "row",

    }
});

//make this component available to the app
export default Cam;
