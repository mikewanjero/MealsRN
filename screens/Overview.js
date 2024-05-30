import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function Overview() {
  return (
    <View>
      <Text>Meals Overview</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: 1,
  padding: 16,
});
