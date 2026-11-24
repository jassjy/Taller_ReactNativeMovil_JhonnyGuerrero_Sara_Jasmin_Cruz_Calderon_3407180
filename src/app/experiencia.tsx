import { ScrollView, StyleSheet, View, Text } from "react-native";
import CabeceraSeccion from "../components/CabeceraSeccion";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

const Experiencia = () => (
  <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido} showsVerticalScrollIndicator={false}>
    <CabeceraSeccion icono="briefcase-outline" etiqueta="TRAYECTORIA" titulo="Experiencia" descripcion="Proyectos y experiencias que han fortalecido mis habilidades." />
    <View style={estilos.resumen}><Text style={estilos.resumenNumero}>03</Text><Text style={estilos.resumenTexto}>experiencias destacadas</Text></View>
    <View style={estilos.lista}>
      <TarjetaExperiencia cargo="Desarrollador junior (práctica)" empresa="Magick Park" periodo="2026 - Actualidad" descripcion="Desarrollo de funcionalidades y consumo de APIs." />
      <TarjetaExperiencia cargo="Auxiliar de soporte técnico" empresa="Magic Park" periodo="2023 - 2024" descripcion="Atención a usuarios y mantenimiento de equipos de cómputo." />
      <TarjetaExperiencia cargo="Proyecto personal" empresa="Independiente" periodo="2024" descripcion="Aplicación web de gestión creada como proyecto de formación." />
    </View>
  </ScrollView>
);

export default Experiencia;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#F5F6FA" },
  contenido: { padding: 18, paddingBottom: 30 },
  resumen: { flexDirection: "row", alignItems: "center", gap: 11, marginTop: 17, marginBottom: 8, padding: 14, backgroundColor: "#302A4D", borderRadius: 15 },
  resumenNumero: { color: "#C7BEFF", fontSize: 22, fontWeight: "800" },
  resumenTexto: { color: "#FFFFFF", fontSize: 13, fontWeight: "600" },
  lista: { marginTop: 4 },
});
