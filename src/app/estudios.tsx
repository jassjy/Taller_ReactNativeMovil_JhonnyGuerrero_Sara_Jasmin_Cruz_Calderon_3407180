import { ScrollView, StyleSheet, Text, View } from "react-native";
import CabeceraSeccion from "../components/CabeceraSeccion";
import TarjetaEstudio from "../components/TarjetaEstudio";

const Estudios = () => (
  <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido} showsVerticalScrollIndicator={false}>
    <CabeceraSeccion icono="school-outline" etiqueta="FORMACIÓN" titulo="Mis estudios" descripcion="Un recorrido de aprendizaje que sigue creciendo." />
    <View style={estilos.lista}>
      <TarjetaEstudio titulo="Bachiller" institucion="Colegio Hernando Duran Dussan" anio={2025} enCurso={false} />
      <TarjetaEstudio titulo="Técnico" institucion="SENA - PROGRAMACION DE SOFTWARE " anio={2025} enCurso={false} />
      <TarjetaEstudio titulo="Tecnólogo en ADSO" institucion="SENA" anio={2026} enCurso={true} />
    </View>
    <View style={estilos.nota}><View style={estilos.punto} /><Text style={estilos.notaTexto}>Formación tecnológica en curso en el SENA</Text></View>
  </ScrollView>
);

export default Estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#F5F6FA" },
  contenido: { padding: 18, paddingBottom: 30 },
  lista: { marginTop: 16, gap: 2 },
  nota: { flexDirection: "row", alignItems: "center", gap: 10, marginTop: 12, padding: 15, backgroundColor: "#EEEBFC", borderRadius: 14 },
  punto: { width: 7, height: 7, borderRadius: 5, backgroundColor: "#6957D8" },
  notaTexto: { color: "#5146A1", fontSize: 12, fontWeight: "700", flex: 1 },
});
