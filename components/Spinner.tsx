import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="small" color="##9aa0b7" />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
  },
});

export default Spinner;
