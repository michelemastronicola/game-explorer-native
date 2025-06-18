import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GameCard from "../components/GameCard";
import { Game } from "../types/game";
import { searchGames } from "../utils/api";

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Game[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 2) {
      const timer = setTimeout(() => {
        searchGames(query).then((data) =>
          setResults(data.results || [])
        );
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Cerca un videogioco..."
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          placeholderTextColor="#999"
        />
        {query.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setQuery("");
              setResults([]);
            }}
            style={styles.clearIcon}
          >
            <Ionicons name="close-circle" size={24} color="#999" />
          </TouchableOpacity>
        )}
      </View>

      {results.length > 0 && (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <GameCard
              game={item}
              onPress={() =>
                router.push({
                  pathname: "/game/[id]",
                  params: { id: item.id.toString() },
                })
              }
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#111",
  },
inputWrapper: {
  position: "relative",
  justifyContent: "center",
  height: 48, // ← altezza fissa
  marginBottom: 16,
},
input: {
  height: "100%",
  paddingHorizontal: 12,
  paddingRight: 40, // spazio per la X
  backgroundColor: "#222",
  borderRadius: 8,
  color: "#fff",
},
clearIcon: {
  position: "absolute",
  right: 12,
  top: "50%",
  marginTop: -12, // metà della height (24px) per centrarla
},

});
