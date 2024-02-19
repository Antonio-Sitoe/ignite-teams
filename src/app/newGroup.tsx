import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/Header";
import { Input } from "@/components/Input";
import { UsersThree } from "phosphor-react-native";
import { HighLigth } from "@/components/HighLigth";
import { Button } from "@/components/Button";
import theme from "@/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const NewGroup = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600, padding: 24 }}
    >
      <Header showBackButton />
      <View className="flex-1 justify-center">
        <UsersThree
          size={56}
          color={theme.COLORS.GREEN_700}
          style={{
            alignSelf: "center",
          }}
        />
        <HighLigth
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={() => {}}
          autoCorrect={false}
        />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default NewGroup;
