import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryGridTile({ title, color, onButtonPress }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.grid, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#CCC" }}
        onPress={onButtonPress}
      >
        <View style={styles.gridInner}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: "white",
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  gridInner: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
