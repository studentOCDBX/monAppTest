//import liraries
import { Camera } from 'expo-camera';
import React, { Component, useContext, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';
import * as MediaLibrary from 'expo-media-library';

// create a component
const Cam = (props) => {

    const context = useContext(UserContext);
    const [cameraPermission, setCameraPermission] = useState(null);
    const [mediaPermission, setMediaPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const cameraRef = useRef();
    console.log(cameraRef);

    useEffect(() => {
        (async () => {
            const permission = await Camera.requestCameraPermissionsAsync();
            setCameraPermission(permission.granted);
            
            const media = await MediaLibrary.requestPermissionsAsync();
            setMediaPermission(media.granted);

        })();
    }, []);

    function toggleCameraType() {
        if (type === Camera.Constants.Type.back) {
            setType(Camera.Constants.Type.front);
        } else {
            setType(Camera.Constants.Type.back);
            
        }
    }

    async function takePhoto() {

        const image = await cameraRef.current.takePictureAsync();
        console.log(image);

        //Utiliser le contexte pour modifier l'avatar de l'utilisateur.
        if (image) {
            context.setUser({
             ...context.user,
                avatar: image.uri,
            }); 
            
            if (mediaPermission) {
                await MediaLibrary.createAssetAsync(image.uri);
            }

            //Revenir vers la page de profil.
            props.navigation.goBack();
        }   

    }

    function codeBar(event) {
        console.log(event);
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
                    ref={cameraRef}
                    style={styles.camera}
                    type={type}
                onBarCodeScanned={codeBar}>
                    <View style={styles.icons_container}>
                        <TouchableOpacity onPress={toggleCameraType}>
                            <MaterialIcons
                                name='flip-camera-ios'
                                size={50}
                                color='green'
                            />
                        </TouchableOpacity>
                         <TouchableOpacity onPress={takePhoto}>
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

    // Exercice
    //Utiliser le contexte pour modifier l'avatar de l'utilisateur.
     //Revenir vers la page de profil.