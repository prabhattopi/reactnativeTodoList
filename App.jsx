import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Task from './components/Task';

function App() {
  return (
    <View style={styles.container}>
      {/* Today tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks where go */}
          <Task text={"Task1"}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',


  },
  taskWrapper:{
  paddingTop:80,
  paddingHorizontal:20,

  },
  sectionTitle:{
   fontSize:24,
   fontWeight: 'bold',
  },
  items:{
  marginTop:30,
  }

});

export default App;
