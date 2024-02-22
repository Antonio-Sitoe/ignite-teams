import { View } from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import { Input } from "@/components/Input";
import { UsersThree } from "phosphor-react-native";
import { HighLigth } from "@/components/HighLigth";
import { Button } from "@/components/Button";
import theme from "@/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { groupCreate } from "@/storage/group/groupCreate";

const NewGroup = () => {
  const [group, setGroup] = useState("");
  const router = useRouter();

  async function handleNew() {
    await groupCreate(group);
    router.push({ pathname: "/players", params: { group } });
  }
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
          onChangeText={setGroup}
          autoCorrect={false}
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
          disabled={group.length === 0}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewGroup;
