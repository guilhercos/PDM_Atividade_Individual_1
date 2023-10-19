import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";

export function Input({ addTechnology, change }) {

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf')
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
      <TextInput
        style={styles.input} onLayout={onLayoutRootView}
        placeholderTextColor="#808080"
        placeholder="Adicione uma nova tecnologia"
        onChangeText={change}
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={addTechnology}
      >
        <Image source={require("../../assets/plus.png")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 327,
    flexDirection: "row",
  },
  input: {
    color: "#F2F2F2",
    fontSize: 16,
    width: 271,
    height: 54,
    marginTop: -28,
    backgroundColor: "#262626",
    borderRadius: 6,
    borderWidth: 1,
    padding: 16,
    borderColor: "#0D0D0D",
    fontFamily: "Inter-Regular",
    lineHeight: 22.4,
  },
  button: {
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    marginLeft: 4,
    borderRadius: 8,
    padding: 18,
    marginTop: -26.8,
  },
  image: {
    width: 16,
    height: 16,
  },
});
