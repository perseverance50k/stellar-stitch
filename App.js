import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [starInput, setStarInput] = useState("");
  const [stars, setStars] = useState([]);

  const starInputChangeHandler = (enteredText) => {
    setStarInput(enteredText);
  };

  const addStarBtnPressHandler = () => {
    if (starInput.length === 0) return;
    setStars((currentStars) => [...currentStars, starInput]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a name of the star"
          onChangeText={starInputChangeHandler}
          autoCapitalize="none"
        />
        <Button
          title="Add star"
          color="#f0b800"
          onPress={addStarBtnPressHandler}
        />
      </View>
      <View style={styles.starsContainer}>
        <FlatList
          data={stars}
          renderItem={(itemData) => {
            const { item } = itemData;
            return (
              <View style={styles.starsListItem}>
                <Text style={styles.starsListItemText}>{item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  starsContainer: {
    flex: 5,
  },
  starsListItem: {
    backgroundColor: "#ff8c00",
    margin: 3,
    padding: 10,
    borderRadius: 10,
  },
  starsListItemText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
