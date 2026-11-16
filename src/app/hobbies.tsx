import { Alert, ScrollView, StyleSheet } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

const Hobbies = () => (
  <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
    <TarjetaHobby
      nombre="Videojuegos"
      icono="game-controller-outline"
      onPress={() =>
        Alert.alert(
          "Videojuegos",
          "Juego sobre todo sandbox y me gusta personalizarlos con mods."
        )
      }
    />
    <TarjetaHobby
      nombre="Programar"
      icono="code-slash-outline"
      onPress={() =>
        Alert.alert(
          "Programar",
          "Practico con proyectos pequeños de web y móvil en mi tiempo libre."
        )
      }
    />
    <TarjetaHobby
      nombre="Música"
      icono="musical-notes-outline"
      onPress={() =>
        Alert.alert("Música", "Escucho música mientras estudio o programo.")
      }
    />
  </ScrollView>
);

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
});