import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGuessRounds(numberOfRounds);
    setGameIsOver(true);
  }

  function startNewGameHandler() {
    setGameIsOver(true);
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} onStartNewGame={startNewGameHandler} roundsNumber={guessRounds}/>;
  }

  return (
    <>
      <StatusBar style="light" />
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroudImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroudImage: {
    opacity: 0.15,
  }
});
