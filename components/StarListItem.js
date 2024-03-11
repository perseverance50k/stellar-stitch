import { View, Text, StyleSheet } from "react-native";

export const StarListItem = ({ item }) => {
  return (
    <View style={styles.starsListItem}>
      <Text style={styles.starsListItemText}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
