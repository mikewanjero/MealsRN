import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import Overview from "./screens/Overview";
import Details from "./screens/Details";
import Favourites from "./screens/Favourites";
import { AntDesign } from "@expo/vector-icons";
import FavouritesContextProvider from "./store/context/favourites-content";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ff7300" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#b14d00" },
        drawerContentStyle: { backgroundColor: "#ff7300" },
        drawerActiveTintColor: "#ff5e00",
        drawerInactiveTintColor: "#ffc888",
        drawerActiveBackgroundColor: "#ffc888",
      }}
    >
      <Drawer.Screen
        name="Meal Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <AntDesign name="bars" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <AntDesign name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
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
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meal Overview" component={Overview} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}
