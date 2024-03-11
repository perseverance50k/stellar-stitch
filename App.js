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
    setStars((currentStars) => [...currentStars, starInput]);
  };

  return (
    <View style={styles.container}>
      <StarInput
        onInputChange={starInputChangeHandler}
        onButtonPress={addStarBtnPressHandler}
      />
      <View style={styles.starsContainer}>
        <StarList stars={stars} />
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
