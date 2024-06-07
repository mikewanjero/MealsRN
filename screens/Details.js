import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-content";

export default function Details({ route, navigation }) {
  /* using useContext to save context for favourite meals*/
  const favMealsCtx = useContext(FavouritesContext);

  /* Defining route to be directed to */
  const mealId = route.params.mealId;

  /* Function to locate meal ids from meal fn in dummy-data */
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  /* Function to find out whether meal selected is a Favourite Meal*/
  const MealIsFavourite = favMealsCtx.ids.includes(mealId);

  function changeFavHandler() {
    if (MealIsFavourite) {
      favMealsCtx.removeFavourite(mealId);
    } else {
      favMealsCtx.addFavourite(mealId);
    }
    console.log("Added New Favourite Meal!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onButtonPress={changeFavHandler}
            icon={MealIsFavourite ? "star" : "staro"}
            color={"white"}
          />
        );
      },
    });
  }, [navigation, changeFavHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.centreList}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  centreList: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
