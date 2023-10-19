import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Header } from "./src/components/Header/header";
import { Input } from "./src/components/Input/input";
import { Panel } from "./src/components/Panel/panel";

export default function App() {
  const [value, setValue] = useState("");
  const [values, setValues] = useState<string[]>([]);
  const [trigger, setTrigger] = useState(0);

  function addTechnology() {
    const newTechnology = {
      id: calculateIdValor(values),
      key: true,
      content: value,
    };
    setValues([...values, newTechnology]);
  }

  function setEvent(event) {
    trigger;
    setTrigger(event);
  }

  function change(event) {
    return setValue(event);
  }

  function calculateIdValor(values) {
    let idValue = 0;
    values.map((value) => {
      if (value.id === idValue) {
        idValue++;
      }
    });
    return idValue;
  }

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0D0D0D" />
      <Header/>
      <Input change={change} addTechnology={addTechnology}/>
      <Panel values={values} setEvent={setEvent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    marginTop: 0,
  },
});
