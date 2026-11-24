import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  detalle?: string;
  onPress: () => void;
  variante?: "principal" | "social";
};

const MiBoton = ({ textoBoton, nombreIcono, detalle, onPress, variante = "principal" }: Props) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={detalle ? `${textoBoton}: ${detalle}` : textoBoton}
    onPress={onPress}
    style={({ pressed }) => [estilos.boton, variante === "social" ? estilos.social : estilos.principal, pressed && estilos.presionado]}
  >
    <View style={[estilos.icono, variante === "social" && estilos.iconoSocial]}><Ionicons name={nombreIcono} size={19} color={variante === "social" ? "#6957D8" : "#FFFFFF"} /></View>
    <View style={estilos.contenido}>
      <Text style={[estilos.texto, variante === "social" && estilos.textoSocial]}>{textoBoton}</Text>
      {detalle ? <Text style={estilos.detalle}>{detalle}</Text> : null}
    </View>
    <Ionicons name="open-outline" size={17} color={variante === "social" ? "#8C89A1" : "#D4D0EB"} />
  </Pressable>
);

export default MiBoton;

const estilos = StyleSheet.create({
  boton: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 13, paddingVertical: 11, borderRadius: 14, marginVertical: 4 },
  principal: { backgroundColor: "#302A4D" },
  social: { backgroundColor: "#F7F6FC", borderWidth: 1, borderColor: "#EBE9F4" },
  presionado: { opacity: 0.78, transform: [{ scale: 0.99 }] },
  icono: { width: 34, height: 34, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: "#4B426E" },
  iconoSocial: { backgroundColor: "#EEEBFA" },
  contenido: { flex: 1 },
  texto: { color: "#FFFFFF", fontSize: 13, fontWeight: "700" },
  textoSocial: { color: "#302F43" },
  detalle: { color: "#C2BED1", fontSize: 11, marginTop: 2 },
});
