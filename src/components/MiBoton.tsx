import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

const MiBoton = ({ textoBoton, nombreIcono, colorBoton, onPress }: Props) => (
  <Pressable
    onPress={onPress}
    style={[estilos.boton, { backgroundColor: colorBoton }]}
  >
    <Ionicons name={nombreIcono} size={20} color="#fff" />
    <Text style={estilos.texto}>{textoBoton}</Text>
  </Pressable>
);

export default MiBoton;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,
    gap: 8,
  },
  texto: { color: "#fff", fontWeight: "bold", fontSize: 15 },
});