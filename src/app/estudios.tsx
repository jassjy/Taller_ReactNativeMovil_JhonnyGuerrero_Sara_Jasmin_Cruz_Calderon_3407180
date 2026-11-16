import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

const Estudios = () => (
  <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
    <View style={estilos.encabezado}>
      <Ionicons name="phone-portrait-outline" size={80} color="#2563eb" />
      <Text style={estilos.nombre}>Sara Jasmin Cruz Calderon</Text>
      <Text style={estilos.subtitulo}>Estudios</Text>
    </View>

    <View style={estilos.seccion}>
      <TarjetaEstudio
        titulo="Bachiller"
        institucion="Institución Educativa Municipal"
        anio={2020}
        enCurso={false}
      />
      <TarjetaEstudio
        titulo="Técnico"
        institucion="Colegio ABC"
        anio={2021}
        enCurso={false}
      />
      <TarjetaEstudio
        titulo="Tecnólogo"
        institucion="SENA"
        anio={2025}
        enCurso={true}
      />
    </View>
  </ScrollView>
);

export default Estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 22, fontWeight: "bold", color: "#0f172a", textAlign: "center" },
  subtitulo: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: { backgroundColor: "#fff", padding: 16, borderRadius: 12, elevation: 1 },
});