import { ScrollView, StyleSheet } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

const Experiencia = () => (
  <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
    <TarjetaExperiencia
      cargo="Desarrollador junior (práctica)"
      empresa="Empresa de ejemplo S.A.S."
      periodo="2025 - Actualidad"
      descripcion="Desarrollo de funcionalidades móviles con React Native y consumo de APIs."
    />
    <TarjetaExperiencia
      cargo="Auxiliar de soporte técnico"
      empresa="Tienda de ejemplo"
      periodo="2023 - 2024"
      descripcion="Atención a usuarios y mantenimiento de equipos de cómputo."
    />
    <TarjetaExperiencia
      cargo="Proyecto personal"
      empresa="Independiente"
      periodo="2024"
      descripcion="Aplicación web de gestión creada como proyecto de formación."
    />
  </ScrollView>
);

export default Experiencia;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
});