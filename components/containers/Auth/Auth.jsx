//Exo2:
// Créer un composant "components/containers/Auth/Auth.jsx":
// Il recevra un nom et un prenom en props.
// On aura un View, avec du texte: Bonjour (Nome et prenom), veuillez vous connecter.
// Styliser cette View: Couleur de font (Bleu), et le texte en blanc.
// Augmenter la taille du texte.

//Importer Auth dans App.js.
//L'utiliser dans le return.

import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Login from "./Login";
import SignUp from "./SignUp";
/* 
Résultat de l'ancien exo
export function Auth(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.texte}>
                Bonjour {props.name} {props.firstName}, veuillez vous connecter
            </Text>
        </View>
    );
}
 */
export function Auth(props) {

  const [isLogin, setIsLogin] = useState(false);
  
  function toggleIsLogin() {

    setIsLogin(!isLogin);
  }

    return (
        <View style={styles.container}>
        <Text style={styles.texte}>
          {isLogin
            ? "Bonjour , veuillez vous connecter."
            : "Bonjour , veuillez vous inscrire."}
          </Text>
          {isLogin ? <Login /> : <SignUp />}
        <TouchableOpacity onPress={toggleIsLogin}>
          <Text>
            {isLogin
              ? "Vous n'êtes pas encore membre? Inscrivez-vous."
              : "Vous êtes déjà membre? Connectez-vous"}
           </Text>
        </TouchableOpacity >
        </View>
    );
}
 
const styles = StyleSheet.create({
  container: {
    padding: 20,
    
  },
  
  texte: {
    color: "whitesmoke",
    fontSize: 20,
    backgroundColor: "royalblue",
    padding: 15,


   
  },
});

