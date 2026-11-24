import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = { icono: keyof typeof Ionicons.glyphMap; etiqueta: string; titulo: string; descripcion: string };

const CabeceraSeccion = ({ icono, etiqueta, titulo, descripcion }: Props) => (
  <View style={estilos.contenedor}>
    <View style={estilos.icono}><Ionicons name={icono} size={23} color="#6957D8" /></View>
    <Text style={estilos.etiqueta}>{etiqueta}</Text>
    <Text style={estilos.titulo}>{titulo}</Text>
    <Text style={estilos.descripcion}>{descripcion}</Text>
  </View>
);

export default CabeceraSeccion;

const estilos = StyleSheet.create({
  contenedor: { paddingTop: 12, paddingBottom: 5 },
  icono: { width: 48, height: 48, borderRadius: 16, backgroundColor: "#EEEBFC", alignItems: "center", justifyContent: "center", marginBottom: 14 },
  etiqueta: { color: "#766AC2", fontSize: 10, fontWeight: "800", letterSpacing: 1.6, marginBottom: 5 },
  titulo: { color: "#25243A", fontSize: 27, fontWeight: "800", letterSpacing: -0.5 },
  descripcion: { color: "#777688", fontSize: 13, lineHeight: 19, marginTop: 6 },
});
