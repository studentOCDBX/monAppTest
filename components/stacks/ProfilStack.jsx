import { createStackNavigator } from "@react-navigation/stack";
import  Profil  from "../containers/Profil/Profil";
import  Cam  from "../containers/Cam/Cam";

const Stack = createStackNavigator();

export default function ProfilStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                   backgroundColor: "royalblue",
                },
                headerTitleStyle: {
                    color: "white",
                    fontWeight: "bold",
                },
                headerTintColor: "whitesmoke",
            }}>
            
            <Stack.Screen name='profil'
                component={Profil}
                options={{
                    title: "Votre profil",
                    headerShown: false,
                }}
            />
            
            <Stack.Screen
                name='camera'
                component={Cam}
                options={{
                    title: "Prenez une photo pour votre profil",
            }}/>
            
        </Stack.Navigator>
    )
}