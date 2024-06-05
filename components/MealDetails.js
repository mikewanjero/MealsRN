import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.mealDetails, style]}>
      <Text style={[styles.mealText, textStyle]}>{duration} min: </Text>
      <Text style={[styles.mealText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.mealText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
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
