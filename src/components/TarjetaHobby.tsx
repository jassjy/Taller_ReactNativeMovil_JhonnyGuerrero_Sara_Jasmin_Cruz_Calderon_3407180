import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  nombre: string;
  icono: keyof typeof Ionicons.glyphMap;
  detalle: string;
  expandido: boolean;
  onPress: () => void;
};

const TarjetaHobby = ({ nombre, icono, detalle, expandido, onPress }: Props) => (
  <Pressable accessibilityRole="button" accessibilityState={{ expanded: expandido }} onPress={onPress} style={({ pressed }) => [estilos.tarjeta, pressed && estilos.presionada]}>
    <View style={estilos.fila}>
      <View style={estilos.icono}><Ionicons name={icono} size={22} color="#6957D8" /></View>
      <Text style={estilos.nombre}>{nombre}</Text>
      <Ionicons name={expandido ? "chevron-up" : "chevron-down"} size={18} color="#858497" />
    </View>
    {expandido ? <Text style={estilos.detalle}>{detalle}</Text> : null}
  </Pressable>
);

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: { backgroundColor: "#FFFFFF", padding: 14, borderRadius: 17, marginVertical: 6, borderWidth: 1, borderColor: "#ECECF2" },
  presionada: { opacity: 0.8 },
  fila: { flexDirection: "row", alignItems: "center", gap: 12 },
  icono: { width: 42, height: 42, borderRadius: 14, backgroundColor: "#F0EDFF", alignItems: "center", justifyContent: "center" },
  nombre: { fontSize: 15, fontWeight: "700", color: "#302F43", flex: 1 },
  detalle: { color: "#737284", fontSize: 13, lineHeight: 20, paddingLeft: 54, paddingRight: 5, paddingTop: 10 },
});
