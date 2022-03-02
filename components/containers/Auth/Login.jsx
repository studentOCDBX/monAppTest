//import liraries
import { useState } from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import Bouton from '../../Ui/Bouton/Bouton';
import { AntDesign } from '@expo/vector-icons';
import InputWithError from '../../Ui/InputWithError/InputWithError';
// create a component
const Login = () => {
    //1- Créer des variables d'état
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    
    //(GESTION DES ERREURS)Créer des variables d'état contenant nos messages d'erreurs 
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    //2-Créer les fonctions qui vont modifier les variables d'etat avec les entrées de l'utilisateur
    function handleEmail(event) {
        //console.log(event); pour vérifier
        setEmailInput(event.target.value);
        // On vide le message d'erreur quand le user tape dans l'input
        setEmailError("")
    }
    
    function handlePassword(event) {
        setPasswordInput(event.target.value);
        // On vide le message d'erreur quand le user tape dans l'input
        setPasswordError("")
    }

    // La fonction qui s'exécute quand on clique sur le bouton
    function connect() {
        if (emailInput.includes("@") && passwordInput.length >= 6) {
            
            alert(`Connection avec succès. Email: ${emailInput}`);
        } else {
            setEmailError(
                emailInput.includes("@") ? "" : "Format email incorrect"
            );
            setPasswordError(
                passwordInput.length >= 6
                    ? ""
                    : "Mot de passe trop court! minimum 6 caractères requis"
            );
        }
    }
     
    return (
        <View style={styles.container}>

            <InputWithError
                holder='Email'
                valeur={emailInput}
                action={handleEmail}
                error={emailError}
            />

            {/*Etape 3 : Créer les Inputs*/}
            <InputWithError
                style={styles.input}
                holder='Mot de passe'
                placeholderTextColor={"royalblue"}
                valeur={passwordInput}
                action={handlePassword}
                isPassword
            />

            <Text style={{color: "#a04141"}}>{passwordError}</Text>
            {/*Le bouton permettant de valider le formulaire*/}
            <Bouton action={connect}>
                <AntDesign name='login' size={20} color='whitesmoke'/>
                <Text style={styles.button_label}>Se connecter</Text>
            </Bouton>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        padding: 10,
    },

    input: {
        backgroundColor: "#DEDEDE",
        padding: 7, 
        margin: 10,
    },

    button_label: {
        color: "whitesmoke",
        fontSize: 15,
        fontWeight: "bold",
        marginHorizontal: 10,
    },
});

//make this component available to the app
export default Login;
