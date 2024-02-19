import { ButtonIcon } from "@/components/ButtonIcon";
import { Filter } from "@/components/Filter";
import Header from "@/components/Header";
import { HighLigth } from "@/components/HighLigth";
import { Input } from "@/components/Input";
import theme from "@/theme";
import { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Players() {
  const [team, setTeam] = useState("Time A");
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600, padding: 24 }}
    >
      <Header showBackButton />
      <HighLigth
        title="Nova Turma"
        subtitle="crie uma turma para adicionar pessoas"
      />
      <View className=" w-full bg-GRAY_700 flex-row justify-center rounded-sm">
        <Input
          inputRef={null}
          placeholder="Nome do participante"
          autoCorrect={false}
          value={""}
          onChangeText={() => {}}
          onSubmitEditing={() => {}}
          returnKeyType="done"
        />
        <ButtonIcon name="add" onPress={() => {}} type="PRIMARY" />
      </View>
      <View className="w-full flex-row items-center my-8 mb-3">
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <Text className="text-white font-BOLD text-MD">0</Text>
      </View>
    </SafeAreaView>
  );
}
