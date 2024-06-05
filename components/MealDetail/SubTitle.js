import { View, Text, StyleSheet } from "react-native";

export default function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 6,
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
});
