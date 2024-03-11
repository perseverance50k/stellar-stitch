import { View, Text, StyleSheet, Pressable } from "react-native";

export const StarListItem = ({ item, onItemPress }) => {
  return (
    <View style={styles.starsListItem}>
      <Pressable
        android_ripple={{ color: "#ffd500" }}
        onPress={() => {
          onItemPress(item.id);
        }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.starsListItemText}>{item.value}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  starsListItem: {
    backgroundColor: "#ff8c00",
    margin: 3,
    borderRadius: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  starsListItemText: {
    padding: 10,
    color: "#ffffff",
    fontWeight: "600",
  },
});
