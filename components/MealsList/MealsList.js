import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ items }) {
  function RenderMealItem(itemData) {
    const Item = itemData.item;

    const mealItemProps = {
      id: Item.id,
      title: Item.title,
      imageUrl: Item.imageUrl,
      affordability: Item.affordability,
      complexity: Item.complexity,
      duration: Item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={RenderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
});
