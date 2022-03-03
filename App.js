import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Auth } from "./components/containers/Auth/Auth";
import { Profil } from "./components/containers/Profil/Profil";
import { UserContext } from "./components/contexts/UserContext";
import ProfilStack from "./components/stacks/ProfilStack";
import Drawer from "./components/drawers/Drawer.jsx";

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
      <NavigationContainer>
        <View style={styles.container}>
          {user ? <Drawer /> : <Auth />}
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe4ea",
  },

  texte: {
    backgroundColor: "gray",
    color: "red",
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
