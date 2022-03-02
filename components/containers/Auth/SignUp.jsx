//import liraries
import React, { Component, useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { AntDesign } from '@expo/vector-icons';
import Bouton from '../../Ui/Bouton/Bouton';
import InputWithError from '../../Ui/InputWithError/InputWithError';

// create a component
const SignUp = (props) => {
    const context = useContext(UserContext);
    console.log(context);

    const [emailInput, setEmailInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

    
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");


  function handleEmail(event) {
    setEmailInput(event.target.value);
    setEmailError("");
  }

  
  function handleUsername(event) {
    setUsernameInput(event.target.value);
    setUsernameError("");
  }

  function handlePassword(event) {
    setPasswordInput(event.target.value);
    setPasswordError("");
  }

  function handleConfirmPassword(event) {
    setConfirmPasswordInput(event.target.value);
    setConfirmPasswordError("");
    }
    
      function signup() {
    if (
      emailInput.includes("@") &&
      usernameInput.length <= 12 &&
      usernameInput != "" &&
      passwordInput.length >= 6 &&
      passwordInput == confirmPasswordInput
    )
    {
        context.setUser({ email: emailInput, username: usernameInput });
        
    } else {

        setEmailError(
          emailInput.includes("@")
            ? ""
            : "Format email incorrect!"
        );
        
        setUsernameError(
          usernameInput.length <= 12
            ? ""
            : "Username trop long!"
        );
        
        setUsernameError(
        usernameInput != ""
            ? ""
            : "Username obligatoire! au moins 1 caractère minimum requis!"
        );
        
        setPasswordError(
          passwordInput.length >= 6
            ? ""
            : "Mot de passe trop court!"
        );
        
        setConfirmPasswordError(
        passwordInput == confirmPasswordInput
            ? ""
            : "Les mots de passes ne sont pas identiques!"
      );
    }
    }
    
    return (
        <View style={styles.container}>
            <Text>S'inscrire</Text>
            
             <InputWithError
                holder='Pseudo:'
                valeur={usernameInput}
                action={handleUsername}
                error={usernameError}
            />
            
            <InputWithError
                holder='Email'
                valeur={emailInput}
                action={handleEmail}
                error={emailError}
            />

            <InputWithError
                style={styles.input}
                holder='Mot de passe'
                placeholderTextColor={"royalblue"}
                valeur={passwordInput}
                action={handlePassword}
                error={passwordError}
                isPassword
            />
            <InputWithError
                style={styles.input}
                holder='Confirmer mot de passe'
                placeholderTextColor={"royalblue"}
                valeur={confirmPasswordInput}
                action={handleConfirmPassword}
                error={confirmPasswordError}
                isPassword
            />

            <Text style={{color: "#a04141"}}>{passwordError}</Text>
            {/*Le bouton permettant de valider le formulaire*/}
            <Bouton action={signup}>
                <AntDesign name='login' size={20} color='whitesmoke'/>
                <Text style={styles.button_label}>S'inscrire</Text>
            </Bouton>
            
    
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
        padding: 10,
    },

    input: {
        backgroundColor: "#DEDEDE",
        padding: 7, 
        width: "100%",
    },

    button_label: {
        color: "whitesmoke",
        fontSize: 15,
        fontWeight: "bold",
        marginHorizontal: 10,
    },
});

//make this component available to the app
export default SignUp;

  /* 
   COnsigne

  Faire le signup form:
  - email: on teste si il a un @, sinon on affiche une erreur (Format email incorrect!)
  - username: on teste ne dépasse pas 12 caractères. (Username trop long!)
  - password: on teste si il dépasse de 6. (Mot de passe trop long!)
  - confirmPassword: on teste si confirmPassword == password. (Les mots de passe ne sont pas identiques).

  Si les condition passent, on fait un aler(Inscription avec succes)
  Sinon on affiche les erreurs 
  
  */