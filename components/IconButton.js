import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function IconButton({ icon, color, onButtonPress }) {
  return (
    <Pressable
      onPress={onButtonPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <AntDesign name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.4,
  },
});
