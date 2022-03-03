import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilStack from "../stacks/ProfilStack";

const DrawerNavigator = createDrawerNavigator();

export default function Drawer() {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen
                name='profilstack'
                component={ProfilStack}
                options={{ title: "Profil"}}
            />
        </DrawerNavigator.Navigator>
    )
}