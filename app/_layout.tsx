import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "PressStart": require("../assets/fonts/PressStart2P-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack
    screenOptions={{
      headerStyle: { backgroundColor: "#111" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold", fontFamily: "PressStart" },
      contentStyle: { backgroundColor: "#111" },
    }}>
    <Stack.Screen
      name="index"
      options={{ title: "Game Finder" }}
    />
    <Stack.Screen name="game/[id]" options={{ title: "Loading..." }} />

  </Stack>;
}
