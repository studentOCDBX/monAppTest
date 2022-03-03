//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';

// create a component
const NavBar = (props) => {
     const context = useContext(UserContext);
    console.log(props.navigationProps.options.title);

    function openMenu() {
        props.navigationProps.navigation.openDrawer();
    }

    function logout() {
        context.setUser(null);
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu_button}>
                <AntDesign name='menu-fold' size={25} color='whitesmoke' onPress={openMenu} />
            </TouchableOpacity>
            <Text style={styles.title}>{props.navigationProps.options.title}</Text>
            <TouchableOpacity style={styles.logout_button} onPress={logout}>
                <AntDesign name="logout" size={24} color="white" />
            </TouchableOpacity>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'royalblue',
        padding: 10,

    },

    title: {
        color: "whitesmoke",
        fontSize: 25,

    },

    menu_button: {
        position: "absolute",
        left: 10,
    },

    logout_button: {

        position: "absolute",
        right: 10,
    }
});

//make this component available to the app
export default NavBar;
