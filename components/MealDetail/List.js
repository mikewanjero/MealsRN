import { Text, View, StyleSheet } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 10,
    marginHorizontal: 4,
    backgroundColor: "#E2B497",
  },
  itemText: {
    color: "#FF7300",
    textAlign: "center",
  },
});
