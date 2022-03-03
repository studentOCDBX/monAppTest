import { createDrawerNavigator } from "@react-navigation/drawer";
import Map from "../containers/Map/Map";
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
        name="profilstack"
        component={ProfilStack}
        options={{ title: "Profil" }}
      />

      <DrawerNavigator.Screen
        name="map"
        component={Map}
        options={{ title: "Carte Google" }}
      />
    </DrawerNavigator.Navigator>
  );
}
