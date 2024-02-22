import { Button } from "@/components/Button";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Filter } from "@/components/Filter";
import Header from "@/components/Header";
import { HighLigth } from "@/components/HighLigth";
import { Input } from "@/components/Input";
import { PlayerCard } from "@/components/PlayerCard";
import theme from "@/theme";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type route = {
  group: string;
};

export default function Players() {
  const [team, setTeam] = useState("Time A");
  const { group } = useLocalSearchParams<route>();
  const [players, setPlayers] = useState("Rodrigo");
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600, padding: 24 }}
    >
      <Header showBackButton />
      <HighLigth
        title={group}
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
        <Text className="text-white font-BOLD text-MD">
          {players.length + 1}
        </Text>
      </View>
      <FlatList
        data={players}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <PlayerCard name={item} onPress={() => {}} />;
        }}
        ListEmptyComponent={() => <Text>Sem pessoas</Text>}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />
      <Button type="SECUNDARY" title="Remover a turma" />
    </SafeAreaView>
  );
}
