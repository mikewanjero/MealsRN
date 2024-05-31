import { View, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

export default function Overview({ route, navigation }) {
  const catID = route.params.categoryID;

  const DisplayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

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
