import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const Layout = () => (
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#6957D8",
      tabBarInactiveTintColor: "#9291A2",
      tabBarStyle: { height: 66, paddingTop: 8, paddingBottom: 8, backgroundColor: "#FFFFFF", borderTopColor: "#ECECF2", elevation: 10 },
      tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
    }}
  >
    <Tabs.Screen name="index" options={{ title: "Inicio", tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color as string} /> }} />
    <Tabs.Screen name="estudios" options={{ title: "Estudios", tabBarIcon: ({ color, size }) => <Ionicons name="school-outline" size={size} color={color as string} /> }} />
    <Tabs.Screen name="experiencia" options={{ title: "Experiencia", tabBarIcon: ({ color, size }) => <Ionicons name="briefcase-outline" size={size} color={color as string} /> }} />
    <Tabs.Screen name="hobbies" options={{ title: "Intereses", tabBarIcon: ({ color, size }) => <Ionicons name="heart-outline" size={size} color={color as string} /> }} />
  </Tabs>
);

export default Layout;
