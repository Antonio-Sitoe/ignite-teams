import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "@/theme";
import { ButtonIcon } from "./ButtonIcon";

type props = {
  name: string;
  onPress: () => void;
};

export const PlayerCard = ({ name, onPress }: props) => {
  return (
    <View className="w-full h-14 bg-GRAY_500 flex-row items-center mb-4">
      <MaterialIcons
        name="person"
        size={24}
        color={theme.COLORS.GRAY_200}
        style={{
          marginLeft: 16,
          marginRight: 4,
        }}
      />
      <Text className="flex-1 text-MD text-GRAY_200 font-REGULAR">{name}</Text>
      <ButtonIcon name="close" type="SECUNDARY" onPress={onPress} />
    </View>
  );
};
