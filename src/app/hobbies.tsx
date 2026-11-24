import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CabeceraSeccion from "../components/CabeceraSeccion";
import TarjetaHobby from "../components/TarjetaHobby";

const intereses = [
  {
    nombre: "Videojuegos",
    icono: "game-controller-outline" as const,
    detalle:
      "Disfruto juegos como Elden Ring, Hollow Knight, Hades, The Witcher 3 y la saga Dark Souls. Me atraen los retos de dificultad, las narrativas inmersivas y los mundos con una dirección artística cuidada.",
  },
  {
    nombre: "Programar",
    icono: "code-slash-outline" as const,
    detalle:
      "Para mí programar es arte: es la forma de crear algo desde cero con lógica y creatividad, donde cada línea de código construye una experiencia. Practico con proyectos personales en mi tiempo libre.",
  },
  {
    nombre: "Música",
    icono: "musical-notes-outline" as const,
    detalle:
      "Escucho música mientras estudio o programo. Mis géneros favoritos son el metal (heavy, power y symphonic metal), el rock clásico y alternativo, además del post-rock y la música instrumental para concentrarme.",
  },
];

const Hobbies = () => {
  const [seleccionado, setSeleccionado] = useState<string | null>(null);
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido} showsVerticalScrollIndicator={false}>
      <CabeceraSeccion icono="heart-outline" etiqueta="FUERA DEL CÓDIGO" titulo="Mis intereses" descripcion="Actividades que me inspiran y acompañan en mi tiempo libre." />
      <View style={estilos.lista}>{intereses.map((interes) => <TarjetaHobby key={interes.nombre} nombre={interes.nombre} icono={interes.icono} detalle={interes.detalle} expandido={seleccionado === interes.nombre} onPress={() => setSeleccionado(seleccionado === interes.nombre ? null : interes.nombre)} />)}</View>
      <Text style={estilos.pista}>Toca una tarjeta para conocer un poco más</Text>
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#F5F6FA" },
  contenido: { padding: 18, paddingBottom: 30 },
  lista: { marginTop: 17 },
  pista: { color: "#9291A2", fontSize: 12, textAlign: "center", marginTop: 12 },
});