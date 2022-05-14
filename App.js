import { StyleSheet, View } from "react-native";
import CustomForm from "./components/CustomForm";

export default function App() {
  return (
    <View style={styles.container}>
      <CustomForm saisie="veuillez écrire une phrase" />
    </View>
  );
}

// mes styles container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
