import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Country from './component/Country';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#00ffff', fontWeight: 'bold'}}>Yooooo!</Text>
      <Text>WoW!</Text>
      <Country></Country>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
