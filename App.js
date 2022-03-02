import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Auth } from "./components/containers/Auth/Auth";
import { Profil } from "./components/containers/Profil/Profil";
import { UserContext } from "./components/contexts/UserContext";

//Composant resultat de l'exo 1
/* export default function App() {

  return (
    <View style={styles.container}>
      <Profil name="DARBOUX" firstName="Nazaire" />
      <Auth name="DARBOUX" firstName="Darnell" />
      <StatusBar style="auto" />
    </View>
  );
} */

export default function App() {
  const fakeUser = { email: "toto@yopmail.com", username: "toto" };
  const [user, setUser] = useState(fakeUser);
  return (
    //On utilise la condition ternaire afin d'afficher soit le profil si pas d'utilisateur ou l'Authentification
    <UserContext.Provider value={{ user, setUser }}>
      <View style={styles.container}>
        {user ? <Profil /> : <Auth />}
        <StatusBar style="auto" />
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },

  texte: {
    backgroundColor: "#fff",
    color: "green",
    fontSize: 50,
    fontWeight: "bold",
    textDecorationLine: "underline",
    alignItems: "center",
    justifyContent: "center",
  },
});

//  Exo1:
// Créer un classe texte, et la lier a la balise <Text></Text>:
// - Changer la couleur du texte.
// - Augmenter la taille du texte.
// - Changer la police en gras.
// - Ajouter une ligne en dessous
