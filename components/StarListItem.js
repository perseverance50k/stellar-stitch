import { View, Text, StyleSheet, Pressable } from "react-native";

export const StarListItem = ({ item, onItemPress }) => {
  return (
    <Pressable
      onPress={() => {
        onItemPress(item.id);
      }}
    >
      <View style={styles.starsListItem}>
        <Text style={styles.starsListItemText}>{item.value}</Text>
      </View>
    </Pressable>
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
