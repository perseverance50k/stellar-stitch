import { FlatList } from "react-native";
import { StarListItem } from "./StarListItem";

export const StarList = ({ stars }) => {
  return (
    <FlatList
      data={stars}
      renderItem={(itemData) => {
        const { item } = itemData;
        return <StarListItem item={item} />;
      }}
    />
  );
};
