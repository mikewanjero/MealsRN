import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function Overview({ route }) {
  const catID = route.params.categoryID;

  const DisplayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  function RenderMealItem(itemData) {
    const Item = itemData.item;

    const mealItemProps = {
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
        data={DisplayedMeals}
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
