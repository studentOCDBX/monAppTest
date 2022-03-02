import { createStackNavigator } from "@react-navigation/stack";
import  Profil  from "../containers/Profil/Profil";
import  Cam  from "../containers/Cam/Cam";

const Stack = createStackNavigator();

export default function ProfilStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='profil' component={Profil}/>
            <Stack.Screen name='camera' component={Cam}/>
        </Stack.Navigator>
    )
}