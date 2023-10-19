import React from "react";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { View, Text, StyleSheet, Image } from "react-native";

export function NoTask() {

  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf'),
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
    <View style={styles.container}>
      <Image
        source={require("../../assets/clipboard.png")}
        style={styles.clipboardIcon}
      />
      <Text style={styles.paragraph1} onLayout={onLayoutRootView}>
        Você ainda não tem tecnologias cadastradas
      </Text>
      <Text style={styles.paragraph2} onLayout={onLayoutRootView}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 208,
    borderTopColor: "#333333",
    borderTopWidth: 1,
    alignItems: "center",
  },
  clipboardIcon: {
    width: 56,
    height: 56,
    marginTop: 48,
  },
  paragraph1: {
    marginTop: 16,
    fontSize: 14,
    color: "#808080",
    fontFamily: "Inter-Bold",
    lineHeight: 19.6,
  },
  paragraph2: {
    fontSize: 14,
    color: "#808080",
    fontFamily: "Inter-Regular",
    lineHeight: 19.6,
  },
});
