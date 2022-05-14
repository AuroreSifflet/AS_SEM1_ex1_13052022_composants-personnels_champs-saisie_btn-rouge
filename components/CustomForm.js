import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

const CustomForm = (props) => {
  const { saisie } = props;

  console.log(saisie);
  return (
    /*   <form>
      <label>
      Nom :
      <input type="text" name="name" valueinput={saisie} />
      </label>
      <input type="submit" value="Envoyer" />
      </form> */
    <View>
      <View>
        <SafeAreaView>
          <TextInput style={styles.input} value={saisie} />
        </SafeAreaView>
      </View>
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Validez</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// mes styles container
const styles = StyleSheet.create({
  input: {
    minWidth: 300,
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  },
  btn: {
    width: "60%",
    height: 50,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    justifyContent: "center", //justifié le texte à la vertical, centré le texte à la vertical
    alignSelf: "center",
  },
  text: {
    color: "white",
    alignSelf: "center", //centré à l'horizontal
    textTransform: "uppercase",
    fontSize: 20,
  },
});

export default CustomForm;
