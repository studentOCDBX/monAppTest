//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// create a component
const NavBar = (props) => {
    console.log(props.navigationProps.options.title);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu_button}>
                <AntDesign name='menu-fold' size={25} color='whitesmoke' />
            </TouchableOpacity>
            <Text style={styles.title}>{props.navigationProps.options.title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'royalblue',

    },

    title: {
        color: "whitesmoke",
        fontSize: 25,

    },

    menu_button: {
        position: "absolute",
        left: 10,
    }
});

//make this component available to the app
export default NavBar;
