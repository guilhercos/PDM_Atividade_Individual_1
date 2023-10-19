import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { Text, View, StyleSheet } from "react-native";

export function Header() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../../assets/fonts/Inter/Inter-Black.ttf'),
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
      <Text style={styles.header} onLayout={onLayoutRootView}>Minhas Tecnologias</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 0,
    backgroundColor: "#0D0D0D",
    height: 147,
  },
  header: {
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20,
    color: "#4EA8DE",
    fontFamily: "Inter-Black",
    lineHeight: 24.2,
  },
});
