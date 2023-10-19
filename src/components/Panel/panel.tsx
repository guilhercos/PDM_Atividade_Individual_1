import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { NoTask } from "./noTask";
import { PendingCard, CompletedCard } from "./card";

export function Panel({ values, setEvent }) {
  let countCompleted = 0;
  values.map((value) => {
    if (value.key === false) {
      countCompleted++;
    }
  });

  function deleteCard(event, id) {
    values.splice(id, 1);
    values.map((value) => {
      if (value.id > id) {
        value.id = value.id - 1;
      }
    });
    event.preventDefault();
    triggerEvent(event);
  }

  function triggerEvent(event) {
    return setEvent(event);
  }

  function cardVerification(event, id) {
    values.map((value) => {
      if (value.id === id && value.key === true) {
        value.key = false;
      } else if (value.id === id && value.key === false) {
        value.key = true;
      }
      triggerEvent(event);
    });
  }

  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../../assets/fonts/Inter/Inter-Bold.ttf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewTechnologyCreated} onLayout={onLayoutRootView}>
          <Text style={styles.technologyCreated}>Criadas</Text>
          <Text style={styles.countCreated}>{values.length}</Text>
        </View>
        <View style={styles.viewTechnologyCompleted} onLayout={onLayoutRootView}>
          <Text style={styles.technologyCompleted}>Concluídas</Text>
          <Text style={styles.countCompleted}>{countCompleted}</Text>
        </View>
      </View>
      <View style={styles.tasks}>
        {values.length === 0 && <NoTask />}
        <ScrollView style={styles.scrollview}>
        {values.map((value) => {
          if (value.key === false) {
            return (
              <CompletedCard
                cardVerification={cardVerification}
                deleteCard={deleteCard}
                id={value.id}
                content={value.content}
              />
            );
          } else if (value.key === true) {
            return (
              <PendingCard
                cardVerification={cardVerification}
                deleteCard={deleteCard}
                id={value.id}
                content={value.content}
              />
            );
          }
        })}
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  scrollview: {
    marginBottom: "70%",
  },
  container: {
    width: 327,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 0,
  },
  viewTechnologyCreated: {
    flexDirection: "row",
  },
  technologyCreated: {
    fontFamily: "Inter-Bold",
    color: "#4EA8DE",
  },
  countCreated: {
    color: "#D9D9D9",
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 999,
    width: "auto",
    minWidth: 24,
    minHeight: 19,
    height: 19,
    fontSize: 12,
    marginLeft: 8,
    lineHeight: 14.52,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
  },
  viewTechnologyCompleted: {
    flexDirection: "row",
  },
  technologyCompleted: {
    fontFamily: "Inter-Bold",
    color: "#8284FA",
  },
  countCompleted: {
    color: "#D9D9D9",
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 999,
    width: "auto",
    minWidth: 24,
    minHeight: 19,
    fontSize: 12,
    marginLeft: 8,
    lineHeight: 14.52,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
  },
  tasks: {
    width: 327,
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
});
