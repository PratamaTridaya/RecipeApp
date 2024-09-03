// In App.js in a new project

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ScanRecipeScreen = () => {
    const navigation = useNavigation ();
    return (
        <View style={style.screen}>
            <Text>Scan Recipe Screen</Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate("SavedRecipeScreen")}>
                <Text>Go To Saved Recipe Screen</Text>
            </TouchableOpacity> */}
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

export default ScanRecipeScreen;
