import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Game } from "../types/game";

interface Props {
  game: Game;
  onPress: () => void;
}

export default function GameCard({ game, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: game.background_image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{game.name}</Text>
        <Text style={styles.date}>Uscita: {game.released}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#1e1e1e",
  },
  image: {
    height: 200,
    width: "100%",
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  date: {
    color: "#ccc",
  },
});
