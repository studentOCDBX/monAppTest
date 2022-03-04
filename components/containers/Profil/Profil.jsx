import { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { UserContext } from "../../contexts/UserContext";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Bouton from "../../Ui/Bouton/Bouton";

//URL de l'image de profile par defaut (Si l'utilisateur n'a pas encore d'avatar.)
const imageDefaultUrl =
  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

export default function Profil(props) {
  //on utilise le context pour afficher l'email et le username de user
  const context = useContext(UserContext);
  const width = useWindowDimensions().width;

  //La fonction pour ouvrir la librairie du tél ou du pc
  async function openLibrary() {
    let pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (pickedImage && !pickedImage.cancelled) {
      context.setUser({
        ...context.user,
        avatar: pickedImage.uri,
      });
    }
  }

  function goCamera() {
    props.navigation.push("camera");
  }

  function goEditInfos() {
    props.navigation.push("editinfo");
  }

  return (
    <ScrollView>
      {/*  Les infos de l'utilisateur */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 90,
        }}
      >
        {/* Image de profil et les boutons pour la changer */}
        <View>
          <Image
            style={[
              styles.image,
              {
                width: width,
                height: width,
                borderRadius: width,
              },
            ]}
            source={{
              uri: context.user.avatar ? context.user.avatar : imageDefaultUrl,
            }}
          />
          {/* les boutons pour changer l'Image de profil */}
          <View style={styles.icons_container}>
            <TouchableOpacity onPress={openLibrary}>
              <Entypo name="folder-images" size={35} color="royalblue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={goCamera}>
              <Entypo name="camera" size={35} color="royalblue" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Informations de l'utilisateur */}
        <View>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.data}>{context.user.email}</Text>

          <Text style={styles.label}>Username:</Text>
          <Text style={styles.data}>{context.user.username}</Text>

          <Text style={styles.label}>Description:</Text>
          <Text style={styles.data}>
            {context.user.description
              ? context.user.description
              : "Veuillez entrer une description!"}
          </Text>

          <Bouton action={goEditInfos}>
            <Text style={styles.text}>Modifier vos informations</Text>
          </Bouton>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    maxWidth: 250,
    maxHeight: 250,
  },

  icons_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: "royalblue",
  },

  label: {
    fontSize: 16,
    textAlign: "center",
    color: "royalblue",
    fontWeight: "bold",
    // paddingTop: 5,
  },

  data: {
    fontSize: 20,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "royalblue",
  },

  text: {
    textAlign: "center",
    color: "white",
  },
});

// Implémenter la fonctionnalité permettant à l'utilisateur de modifier ses infos personnelles: (email, username, description)
