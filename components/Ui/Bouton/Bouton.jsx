//import liraries
import { StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Bouton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.action}>
            {props.children}
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
      button: {
        padding: 7,
        backgroundColor: "royalblue",
        borderRadius: 5,
        margin: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

    },

});

//make this component available to the app
export default Bouton;
