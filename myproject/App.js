import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.Textinput} placeholder='Your course goal'/>
      <Button style={styles.Textinput} title="Your Goal"/>
    </View>
    <View>
    <Text>Lists .... goals</Text>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50,
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'center',
  },
  Textinput:{
    borderWidth:1,
    borderColor:'black',
    width:'80%',
    marginRight:80,
    padding:80,
  },
});
