import React from "react";
import { Text, View, Image } from "react-native";

const HelloWorld = () => {
  return (
    <View>
      
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          fontStyle: "italic",
          backgroundColor: "black",
          
          paddingTop: 60,
        }}
      >
        4J
      </Text>
      <Image
        source={{
          uri: "https://pbs.twimg.com/amplify_video_thumb/1630634001760174092/img/Ulzkh-3LFSGf5et4?format=jpg&name=large",
        }}
        style={{
          width: 440,
          height: 100,
          opacity: 0.9,
         
        }}
      />
    </View>
  );
};

export default HelloWorld;