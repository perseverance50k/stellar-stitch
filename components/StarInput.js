import { View, TextInput, Button, StyleSheet } from "react-native";

export const StarInput = ({ onInputChange, onButtonPress }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add a name of the star"
        onChangeText={onInputChange}
        autoCapitalize="none"
      />
      <Button title="Add star" color="#f0b800" onPress={onButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
