import { Alert, View } from "react-native";
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
import { AppError } from "@/utils/AppError";

const NewGroup = () => {
  const [group, setGroup] = useState("");
  const router = useRouter();

  async function handleNew() {
    try {
      await groupCreate(group);
      router.push({ pathname: "/players", params: { group } });
    } catch (error) {
      if (error instanceof AppError) {
        console.log("[ERROR]", error);
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Nao foi possivel criar o novo grupo");
      }
    }
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
