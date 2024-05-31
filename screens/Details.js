import { Text } from "react-native";

export default function Details({ route }) {
  /* Defining route to be directed to */
  const mealId = route.params.mealId;

  return <Text>Meal Details Screen({mealId})</Text>;
}
