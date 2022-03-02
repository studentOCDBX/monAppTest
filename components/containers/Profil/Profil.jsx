import { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../../contexts/UserContext";


export function Profil(props) {

    //on utilise le context pour afficher l'email et le username de user
    const context = useContext(UserContext);

    return (
        <View>
            <View>
                <View>
                    <Text>
                        Bonjour {context.user.username} ! votre email est: {context.user.email}
                    </Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: context.user.avatar
                                ? context.user.avatar
                                : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                        }}
                    />
                </View>
            </View>
        </View>
    )

}

    const styles = StyleSheet.create({
  
        image: {
        width: Dimensions.get("windows").width,
        borderRadius: Dimensions.get("windows").width,
    },
    
});