// In App.js in a new project

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RecipeData from "../contants/RecipeData.json";
import ItemRecipe from "../components/ItemRecipe";

const RecipeListScreen = () => {
  const navigation = useNavigation();
//   console.log(RecipeData.recipes);
  return (
    <View style={styles.screen}>
      <FlatList
        data={RecipeData.recipes}
        keyExtractor={(item) => item.id.toString}
        renderItem={({ item }) => <ItemRecipe item = {item} />}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default RecipeListScreen;
