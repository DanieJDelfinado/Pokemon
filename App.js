import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  const VenusaurData = {
    name: "Venusaur",
    image: require("./assets/venusaur.png"), 
    type: "Grass",
    hp: 80,
    moves: ["Petal Dance", "Growth", "Tackle", "Growl"],
    weaknesses: ["Psychic"],
  };

  const CharizardData = {
    name: "Charizard",
    image: require("./assets/charizard.png"), 
    type: "Fire",
    hp: 78,
    moves: ["Dragon Claw", "Ember", "Heat Wave", "Growl"],
    weaknesses: ["Water"],
  };

  const BlastoiseData = {
    name: "Blastoise",
    image: require("./assets/blastoise.png"), 
    type: "Water",
    hp: 79,
    moves: ["Tackle", "Tail Whip", "Water Gun", "Rapid Spin"],
    weaknesses: ["Electric"],
  };

  const FearowData = {
    name: "Fearow",
    image: require("./assets/fearow.png"), 
    type: "Flying",
    hp: 65,
    moves: ["Drill Run", "Leer", "Peck", "Pluck"],
    weaknesses: ["Rock"],
  };

  const SandslashData = {
    name: "Sandslash",
    image: require("./assets/sandslash.png"), 
    type: "Ground",
    hp: 75,
    moves: ["Crush Claw", "Defense Curl", "Poison Sting", "Sand Attack"],
    weaknesses: ["Ice"],
  };

  const VulpixData = {
    name: "Vulpix",
    image: require("./assets/vulpix.png"), 
    type: "Fire",
    hp: 38,
    moves: ["Ember", "Incinerate", "Will-O-Wisp", "Flamethrower"],
    weaknesses: ["Water"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
        <PokemonCard {...VenusaurData} />
        <PokemonCard {...CharizardData} />
        <PokemonCard {...BlastoiseData} />
        <PokemonCard {...FearowData} />
        <PokemonCard {...SandslashData} />
        <PokemonCard {...VulpixData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  scrollContainer: {
    flexGrow: 1, 
  },
});
