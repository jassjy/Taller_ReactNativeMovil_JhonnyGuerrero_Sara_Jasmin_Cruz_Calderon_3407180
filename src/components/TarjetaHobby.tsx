import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  nombre: string;
  icono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

const TarjetaHobby = ({ nombre, icono, onPress }: Props) => (
  <Pressable style={estilos.tarjeta} onPress={onPress}>
    <Ionicons name={icono} size={28} color="#2563eb" />
    <Text style={estilos.nombre}>{nombre}</Text>
  </Pressable>
);

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  nombre: { fontSize: 16, fontWeight: "600" },
});