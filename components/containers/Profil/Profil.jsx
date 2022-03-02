import { useContext } from "react";
import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { UserContext } from "../../contexts/UserContext";

const imageDefaultUrl = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

export function Profil(props) {

    //on utilise le context pour afficher l'email et le username de user
    const context = useContext(UserContext);
    const width = useWindowDimensions().width;

    return (
        <View>
            {/*  Les infos de l'utilisateur */}
            <View>
                {/* Image de profil et les boutons pour la changer */}
                <View>
                    <Text>
                        Bonjour {context.user.username} ! votre email est: {context.user.email}
                    </Text>
                    <Image
                        style={[styles.image, {
                            width: width,
                            height: width,
                            borderRadius: width,
                        },
                        ]}
                        source={{
                            uri: context.user.avatar
                                ? context.user.avatar
                                : imageDefaultUrl,
                        }}
                    />
                </View>
                <View></View>
            </View>
        </View>
    );

};

    const styles = StyleSheet.create({
  
        image: {
        maxWidth: 300,
        maxHeight: 300,
    },
    
});