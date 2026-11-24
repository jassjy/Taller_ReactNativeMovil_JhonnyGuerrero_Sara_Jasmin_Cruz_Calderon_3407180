import { Ionicons } from "@expo/vector-icons";
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

const enlaces = {
  correo: "mailto:s4nsy150@gmail.com",
  telefono: "tel:+573245143452",
  linkedin: "https://www.linkedin.com/in/sara-jasmin-cruz-calderon-9b1261446/",
  tiktok: "https://www.tiktok.com/@mimijasjas5",
  github: "https://github.com/jassjy",
};

async function abrirEnlace(url: string) {
  try {
    await Linking.openURL(url);
  } catch {
    // El dispositivo puede no tener una aplicación compatible con este enlace.
  }
}

const Inicio = () => (
  <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido} showsVerticalScrollIndicator={false}>
    <View style={estilos.hero}>
      <View style={estilos.heroAdorno} />
      <View style={estilos.avatar}><Ionicons name="person" size={42} color="#F4F0FF" /></View>
      <Text style={estilos.etiqueta}>PORTAFOLIO PERSONAL</Text>
      <Text style={estilos.nombre}>Sara Jasmin{"\n"}Cruz Calderon</Text>
      <Text style={estilos.profesion}>Tecnóloga en ADSO · Aprendiz SENA</Text>
      <View style={estilos.disponible}><View style={estilos.punto} /><Text style={estilos.disponibleTexto}>Abierta a nuevos retos</Text></View>
    </View>

    <View style={estilos.seccion}>
      <View style={estilos.tituloFila}>
        <View style={estilos.iconoSeccion}><Ionicons name="sparkles-outline" size={18} color="#6957D8" /></View>
        <Text style={estilos.subtitulo}>Perfil profesional</Text>
      </View>
      <Text style={estilos.parrafo}>¡Hola! Soy una apasionada del desarrollo de software con muchas ganas de crecer cada día. Disfruto convertir ideas en aplicaciones móviles y web funcionales, y me encanta aprender nuevas tecnologías que me permitan crear soluciones cada vez mejores. Manejo React Native, JavaScript, TypeScript, HTML5, CSS3, Python, Java, Node.js, SQL y MongoDB, además de gestión de bases de datos relacionales y no relacionales. Estoy emocionada por aportar mi energía, curiosidad y dedicación a proyectos que generen un impacto real.</Text>
      <View style={estilos.chips}>{["React Native", "JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "Java", "Node.js", "SQL", "MongoDB"].map((habilidad) => <View key={habilidad} style={estilos.chip}><Text style={estilos.chipTexto}>{habilidad}</Text></View>)}</View>
    </View>

    <View style={estilos.seccion}>
      <View style={estilos.tituloFila}>
        <View style={estilos.iconoSeccion}><Ionicons name="paper-plane-outline" size={18} color="#6957D8" /></View>
        <View><Text style={estilos.subtitulo}>Hablemos</Text><Text style={estilos.ayuda}>Elige cómo quieres ponerte en contacto</Text></View>
      </View>
      <MiBoton textoBoton="Enviar correo" detalle="s4nsy150@gmail.com" nombreIcono="mail-outline" onPress={() => abrirEnlace(enlaces.correo)} />
      <MiBoton textoBoton="Llamar" detalle="324 514 3452" nombreIcono="call-outline" onPress={() => abrirEnlace(enlaces.telefono)} />
      <View style={estilos.sociales}>
        <MiBoton textoBoton="LinkedIn" nombreIcono="logo-linkedin" onPress={() => abrirEnlace(enlaces.linkedin)} variante="social" />
        <MiBoton textoBoton="TikTok" nombreIcono="logo-tiktok" onPress={() => abrirEnlace(enlaces.tiktok)} variante="social" />
        <MiBoton textoBoton="GitHub" nombreIcono="logo-github" onPress={() => abrirEnlace(enlaces.github)} variante="social" />
      </View>
    </View>
    <Text style={estilos.pie}>Hecho con dedicación · Sara Jasmin Cruz Calderon</Text>
  </ScrollView>
);

export default Inicio;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#F5F6FA" },
  contenido: { padding: 18, paddingBottom: 30, gap: 15 },
  hero: { backgroundColor: "#241F3D", borderRadius: 25, padding: 24, paddingTop: 25, overflow: "hidden" },
  heroAdorno: { position: "absolute", width: 180, height: 180, borderRadius: 100, backgroundColor: "#38305B", right: -65, top: -70 },
  avatar: { width: 76, height: 76, borderRadius: 24, backgroundColor: "#6957D8", alignItems: "center", justifyContent: "center", marginBottom: 17, borderWidth: 1, borderColor: "#8D80E7" },
  etiqueta: { color: "#BEB6F6", letterSpacing: 1.6, fontSize: 10, fontWeight: "800", marginBottom: 8 },
  nombre: { color: "#FFFFFF", fontSize: 29, lineHeight: 34, fontWeight: "800", letterSpacing: -0.6 },
  profesion: { color: "#D0CDE0", fontSize: 14, marginTop: 8 },
  disponible: { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", gap: 8, backgroundColor: "#34304B", borderRadius: 30, paddingVertical: 8, paddingHorizontal: 11, marginTop: 17 },
  punto: { width: 7, height: 7, borderRadius: 5, backgroundColor: "#62D6A8" },
  disponibleTexto: { color: "#E7E4F2", fontSize: 12, fontWeight: "600" },
  seccion: { backgroundColor: "#FFFFFF", borderRadius: 20, padding: 18, borderWidth: 1, borderColor: "#ECECF2" },
  tituloFila: { flexDirection: "row", alignItems: "center", gap: 11, marginBottom: 13 },
  iconoSeccion: { width: 36, height: 36, borderRadius: 12, backgroundColor: "#F0EDFF", alignItems: "center", justifyContent: "center" },
  subtitulo: { fontSize: 17, fontWeight: "800", color: "#25243A" },
  ayuda: { fontSize: 12, color: "#858497", marginTop: 2 },
  parrafo: { fontSize: 14, color: "#626174", lineHeight: 22 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 7, marginTop: 15 },
  chip: { backgroundColor: "#F2F0FB", paddingHorizontal: 10, paddingVertical: 7, borderRadius: 9 },
  chipTexto: { color: "#5749B4", fontSize: 11, fontWeight: "700" },
  sociales: { gap: 8, marginTop: 5 },
  pie: { color: "#9A99A7", fontSize: 11, textAlign: "center", marginTop: 1 },
});