import { createDrawerNavigator } from "@react-navigation/drawer";
import Got from "../containers/Got/Got";
import Map from "../containers/Map/Map";
import News from "../containers/News/News";
import ProfilStack from "../stacks/ProfilStack";
import NavBar from "../Ui/NavBar/Navbar";

const DrawerNavigator = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        header: (props) => <NavBar navigationProps={props} />,
      }}
    >
      <DrawerNavigator.Screen
        name="news"
        component={News}
        options={{ title: "Last news" }}
      />

      <DrawerNavigator.Screen
        name="profilstack"
        component={ProfilStack}
        options={{ title: "Profil" }}
      />

      <DrawerNavigator.Screen
        name="got"
        component={Got}
        options={{ title: "Game of Thrones" }}
      />

      <DrawerNavigator.Screen
        name="map"
        component={Map}
        options={{ title: "Carte Google" }}
      />
    </DrawerNavigator.Navigator>
  );
}

// Exo du 04/03Implémenter la fonctionnalité permettant de récupérer et d'afficher les articles sur newsapi.org.
