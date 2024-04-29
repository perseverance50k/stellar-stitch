import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { StarInput } from "./components/StarInput";
import { StarList } from "./components/StarList";

export default function App() {
  const [starInput, setStarInput] = useState("");
  const [stars, setStars] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

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
    finishAddNewStarHandler();
  };

  const starItemPressHandler = (id) => {
    setStars((currentStars) => {
      return currentStars.filter((star) => star.id !== id);
    });
  };

  const startAddNewStarHandler = () => {
    setModalIsVisible(true);
  };

  const finishAddNewStarHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add New Star"
        color="#f0b800"
        onPress={startAddNewStarHandler}
      />
      <StarInput
        value={starInput}
        modalIsVisible={modalIsVisible}
        onInputChange={starInputChangeHandler}
        onButtonPress={addStarBtnPressHandler}
        onCancel={finishAddNewStarHandler}
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
