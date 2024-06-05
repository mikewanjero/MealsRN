import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.mealDetails}>
      <Text style={styles.mealText}>{duration} min: </Text>
      <Text style={styles.mealText}>{complexity.toUpperCase()}</Text>
      <Text style={styles.mealText}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mealDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  mealText: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 13,
  },
});
