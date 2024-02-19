import React from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
  subtitle: string;
}

export function HighLigth({ title, subtitle }: Props) {
  return (
    <View className="w-full my-8 mx-auto text-center">
      <Text className="text-XL font-BOLD text-white text-center">{title}</Text>
      <Text className="text-MD font-REGULAR text-GRAY_300 text-center">{subtitle}</Text>
    </View>
  );
}
