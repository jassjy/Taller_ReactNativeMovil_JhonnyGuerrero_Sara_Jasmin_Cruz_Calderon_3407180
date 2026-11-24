import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = { cargo: string; empresa: string; periodo: string; descripcion: string };

const TarjetaExperiencia = ({ cargo, empresa, periodo, descripcion }: Props) => (
  <View style={estilos.tarjeta}>
    <View style={estilos.linea}><View style={estilos.marca}><Ionicons name="briefcase-outline" size={18} color="#6957D8" /></View><Text style={estilos.periodo}>{periodo}</Text></View>
    <Text style={estilos.cargo}>{cargo}</Text>
    <Text style={estilos.empresa}>{empresa}</Text>
    <Text style={estilos.descripcion}>{descripcion}</Text>
  </View>
);

export default TarjetaExperiencia;

const estilos = StyleSheet.create({
  tarjeta: { backgroundColor: "#FFFFFF", padding: 17, borderRadius: 17, marginVertical: 7, borderWidth: 1, borderColor: "#ECECF2" },
  linea: { flexDirection: "row", alignItems: "center", gap: 9, marginBottom: 13 },
  marca: { width: 34, height: 34, borderRadius: 11, backgroundColor: "#F0EDFF", alignItems: "center", justifyContent: "center" },
  periodo: { color: "#7165BF", fontSize: 11, fontWeight: "700" },
  cargo: { fontSize: 15, fontWeight: "800", color: "#2A293D", lineHeight: 21 },
  empresa: { fontSize: 13, color: "#6957D8", fontWeight: "700", marginTop: 4 },
  descripcion: { fontSize: 13, color: "#686778", lineHeight: 20, marginTop: 10 },
});
