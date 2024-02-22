import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native"
import HelloWorld from './Component/HelloWorld';
import UserName from './Component/UserName';
import Counter from './Component/Counter';


const image = { uri: "https://www.pngall.com/wp-content/uploads/2016/07/Wedding-PNG-Image.png" };

export default function App() {
  return (
<ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <HelloWorld />
          <UserName />
          <Counter />
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 180,
    paddingBottom: 100,
    opacity: 0.9,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
