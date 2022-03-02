//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Counter = () => {

    const [counter, setCounter] = useState(0)
    
    function add() {
        setCounter(counter + 1);
    }

    
    return (
        <View style={styles.container}>
            <Text>{counter}</Text>
            <TouchableOpacity onPress={add} style = {styles.button}></TouchableOpacity>
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
});

//make this component available to the app
export default Counter;
