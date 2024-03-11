import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [starInput, setStarInput] = useState("");
  const [stars, setStars] = useState([]);

  const starInputChangeHandler = (enteredText) => {
    setStarInput(enteredText);
  };

  const addStarBtnPressHandler = () => {
    setStars((currentStars) => [...currentStars, starInput]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a name of the star"
          onChangeText={starInputChangeHandler}
        />
        <Button title="Add star" onPress={addStarBtnPressHandler} />
      </View>
      <View style={styles.starsContainer}>
        {stars.map((star, idx) => (
          <Text key={idx}>{star}</Text>
        ))}
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
});
