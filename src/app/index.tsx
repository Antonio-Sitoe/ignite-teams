import { FlatList, Text, View, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { HighLigth } from "@/components/HighLigth";

import Header from "@/components/Header";
import GroupCard from "@/components/GroupCard";
import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { groupsGetAll } from "@/storage/group/groupsGetAll";

export default function Home() {
  const { push } = useRouter();
  const [groups, setGroups] = useState(["Rocket", "Galera do ignite"]);

  function handlePress() {
    push("/newGroup");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleOpenGroups(group: string) {
    push({
      pathname: "/players",
      params: {
        group,
      },
    });
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <View className="flex-1 bg-GRAY_600 text-center p-6 pt-12">
      <StatusBar translucent barStyle={"light-content"} />

      <Header />
      <HighLigth title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={
          groups.length === 0 && {
            flex: 1,
          }
        }
        renderItem={({ item }) => {
          return (
            <GroupCard title={item} onPress={() => handleOpenGroups(item)} />
          );
        }}
        ListEmptyComponent={() => (
          <Text className="text-sm font-REGULAR text-GRAY_300 text-center">
            Que tal criar uma nova turma?
          </Text>
        )}
      />
      <Button title="criar nova turma" type="PRIMARY" onPress={handlePress} />
    </View>
  );
}
