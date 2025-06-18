import { getGameDetails } from "@/utils/api";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native";

export default function GameDetailScreen() {
  const { id } = useLocalSearchParams();
  const [game, setGame] = useState<any>(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (id) {
      getGameDetails(Number(id)).then((data) => {
        setGame(data);
        if (data.name) {
          navigation.setOptions({ title: data.name });
        } else {
          navigation.setOptions({ title: "Loading" });
        }
      });
    }
  }, [id]);

  if (!game) return <Text>Caricamento...</Text>;

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <Image source={{ uri: game.background_image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{game.name}</Text>

        <Text style={styles.label}>Uscita:</Text>
        <Text style={styles.value}>{game.released || "N/D"}</Text>

        <Text style={styles.label}>Rating:</Text>
        <Text style={styles.value}>{game.rating}/5</Text>

        <Text style={styles.label}>Piattaforme:</Text>
        <Text style={styles.value}>
          {game.platforms?.map((p: { platform: { name: any; }; }) => p.platform.name).join(", ")}
        </Text>

        <Text style={styles.label}>Generi:</Text>
        <Text style={styles.value}>
          {game.genres?.map((g: { name: any; }) => g.name).join(", ")}
        </Text>

        <Text style={styles.label}>Descrizione:</Text>
        <Text style={styles.description}>{game.description_raw}</Text>

        {game.website ? (
          <Text
            style={styles.link}
            onPress={() => {
              Linking.openURL(game.website);
            }}
          >
            Visita sito ufficiale
          </Text>
        ) : null}
      </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  image: { height: 300, width: "100%" },
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 12, color: "#fff" },
  label: { fontSize: 14, fontWeight: "bold", color: "#ccc", marginTop: 12 },
  value: { fontSize: 14, color: "#eee" },
  description: { fontSize: 14, color: "#ccc", marginTop: 8 },
  link: {
    marginTop: 16,
    color: "#00ffff",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});

