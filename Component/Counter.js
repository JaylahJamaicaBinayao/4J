import React, { useState } from "react";
import { View, Text, Button } from "react-native";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text
        style={{
          color: "white",
          paddingTop: 30,
          paddingBottom: 30,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 60,
          borderColor: "black",
          borderWidth: 2,
          backgroundColor: "black",
          opacity: 0.9,
        }}
      >
        {count}
      </Text>
      <Button
        color={"blue"}
        onPress={() => {
          setCount(count + 1);
        }}
        title="Add 1"
      />

      <Button
        color={"blue"}
        onPress={() => {
          setCount(count - 1);
        }}
        title="Decrease by 1"
      />
      <Button
        color={"blue"}
        onPress={() => {
          setCount(0);
        }}
        title="Reset"
      />
    </View>
  );
};

export default Counter;