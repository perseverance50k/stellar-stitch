import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StarInput } from "./components/StarInput";
import { StarList } from "./components/StarList";

export default function App() {
  const [starInput, setStarInput] = useState("");
  const [stars, setStars] = useState([]);

  const starInputChangeHandler = (enteredText) => {
    setStarInput(enteredText);
  };

  const addStarBtnPressHandler = () => {
    if (starInput.length === 0) return;
    setStars((currentStars) => [
      ...currentStars,
      { value: starInput, id: stars.length - 1 },
    ]);
    setStarInput("");
  };

  const starItemPressHandler = (id) => {
    setStars((currentStars) => {
      return currentStars.filter((star) => star.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <StarInput
        value={starInput}
        onInputChange={starInputChangeHandler}
        onButtonPress={addStarBtnPressHandler}
      />
      <View style={styles.starsContainer}>
        <StarList stars={stars} onItemPress={starItemPressHandler} />
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
  starsContainer: {
    flex: 5,
  },
});
