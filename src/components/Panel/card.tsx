import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';

export function PendingCard({ id, content, deleteCard, cardVerification }) {

  const [fontsLoaded] = useFonts({
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
    <View style={styles.card}>
      <TouchableOpacity style={styles.touchableMarker}
        id={id}
        onPress={(event) => cardVerification(event, id)}
        activeOpacity={0.5}
      >
        <Image
          source={require("../../assets/check.png")}
          style={styles.check}
        />
      </TouchableOpacity>
      <Text style={styles.content} onLayout={onLayoutRootView}>{content}</Text>
      <TouchableOpacity style={styles.touchableDelete}
        id={id}
        onPress={(event) => deleteCard(event, id)}
        activeOpacity={0.5}
      >
        <Image
          source={require("../../assets/trash.png")}
          style={styles.trash}
        />
      </TouchableOpacity>
    </View>
  );
}

export function CompletedCard({ id, content, deleteCard, cardVerification }) {

  const [fontsLoaded] = useFonts({
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
    <View style={styles.cardChecked}>
      <TouchableOpacity style={styles.touchableMarker}
        id={id}
        onPress={(event) => cardVerification(event, id)}
        activeOpacity={0.5}
      >
        <Image
          source={require("../../assets/checked.png")}
          style={styles.checked}
        />
      </TouchableOpacity>
      <Text style={styles.contentChecked} onLayout={onLayoutRootView}>{content}</Text>
      <TouchableOpacity style={styles.touchableDelete}
        id={id}
        onPress={(event) => deleteCard(event, id)}
        activeOpacity={0.5}
      >
        <Image
          source={require("../../assets/trash.png")}
          style={styles.trash}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 327,
    marginBottom: 8,
    minHeight: 64,
    flexDirection: "row",
    backgroundColor: "#262626",
    alignItems: "center",
    borderColor: "#333333",
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 5,
    paddingBottom: 5,
  },
  check: {
    width: 17.45,
    height: 17.45,
  },
  touchableMarker: {
    width: 24,
    height: 24,
    padding: 3.27,
    marginLeft: 12,
    marginRight: 8,
  },
  content: {
    width: 235,
    color: "#F2F2F2",
    fontSize: 14,
    lineHeight: 19.6,
    fontFamily: "Inter-Regular",
  },
  trash: {
    width: 12.48,
    height: 14,
  },
  touchableDelete: {
    width: 32,
    height: 32,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 10,
    paddingRight: 9.52,
    marginLeft: 8,
    marginRight: 8,
  },
  cardChecked: {
    width: 327,
    marginBottom: 8,
    minHeight: 64,
    flexDirection: "row",
    backgroundColor: "#262626",
    alignItems: "center",
    borderColor: "#262626",
    borderWidth: 1,
    borderRadius: 8,
  },
  checked: {
    width: 17.45,
    height: 17.45,
  },
  contentChecked: {
    width: 235,
    color: "#808080",
    fontSize: 14,
    lineHeight: 19.6,
    textDecorationLine: "line-through",
    fontFamily: "Inter-Regular",
  }
});
