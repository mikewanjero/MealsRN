import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();

  function selectMealItem() {
    navigation.navigate("Details", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#cbbbbb" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItem}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.mealDetails}>
          <Text style={styles.mealText}>{duration} min: </Text>
          <Text style={styles.mealText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.mealText}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 12,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 9,
  },
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
  image: {
    width: "auto",
    height: 200,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 5,
  },
});
