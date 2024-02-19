import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "@/assets/logo.png";
import { CaretLeft } from "phosphor-react-native";
import { useRouter } from "expo-router";

export default function Header({ showBackButton = false }) {
  const { back } = useRouter();
  return (
    <View className="w-full flex-row items-center justify-center">
      {showBackButton && (
        <TouchableOpacity onPress={back} className="flex-1">
          <CaretLeft color="white" size={32} />
        </TouchableOpacity>
      )}
      <Image className="w-14 h-14" source={Logo} />
    </View>
  );
}
