// In App.js in a new project

import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SavedRecipeScreen = () => {
    const navigation = useNavigation ();
    return (
        <View style={style.screen}>
            <Text>Saved Recipe Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SavedRecipeScreen;
