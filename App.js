import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import Overview from "./screens/Overview";
import Details from "./screens/Details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#ff7300" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#b14d00" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "All categories",
            }}
          />
          <Stack.Screen
            name="Meal Overview"
            component={Overview}
            // options={({ route, navigation }) => {
            //   const catID = route.params.categoryID;
            //   return {
            //     title: catID,
            //   };
            // }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap Me!"/>;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
