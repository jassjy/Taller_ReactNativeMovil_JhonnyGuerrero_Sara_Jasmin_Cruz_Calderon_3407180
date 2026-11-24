import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = { titulo: string; institucion: string; anio: number; enCurso: boolean };

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => (
  <View style={[estilos.tarjeta, enCurso && estilos.tarjetaActual]}>
    <View style={estilos.marca}><Ionicons name={enCurso ? "book-outline" : "checkmark"} size={19} color={enCurso ? "#6957D8" : "#4A9A7C"} /></View>
    <View style={estilos.cuerpo}>
      <View style={estilos.tituloFila}><Text style={estilos.titulo}>{titulo}</Text>{enCurso ? <View style={estilos.badge}><Text style={estilos.badgeTexto}>En curso</Text></View> : null}</View>
      <Text style={estilos.institucion}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}{enCurso ? " · Formación actual" : " · Finalizado"}</Text>
    </View>
  </View>
);

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: { flexDirection: "row", alignItems: "flex-start", gap: 13, padding: 16, borderRadius: 17, marginVertical: 6, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#ECECF2" },
  tarjetaActual: { backgroundColor: "#F1EFFC", borderColor: "#D9D3F5" },
  marca: { width: 39, height: 39, borderRadius: 13, backgroundColor: "#F0EDFF", alignItems: "center", justifyContent: "center" },
  cuerpo: { flex: 1 },
  tituloFila: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 8 },
  titulo: { fontSize: 15, fontWeight: "800", color: "#2A293D" },
  institucion: { fontSize: 13, color: "#656477", marginTop: 5 },
  anio: { fontSize: 11, color: "#888798", marginTop: 7 },
  badge: { backgroundColor: "#6957D8", borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4 },
  badgeTexto: { color: "#FFFFFF", fontSize: 9, fontWeight: "800" },
});
