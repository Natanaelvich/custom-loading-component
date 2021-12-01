import { MotiView } from "@motify/components";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LoadingIndicator = ({ size }: { size: number }) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth : 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 1000,
        loop : true,
      }}
      style={{
        borderColor: "#fff",
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 0 },
        
        shadowRadius: 10,
      }}
    ></MotiView>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <LoadingIndicator size={80} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});
