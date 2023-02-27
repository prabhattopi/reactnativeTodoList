import {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Keyboard
} from 'react-native';
import Task from './Task';

function Todo() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  const handleAddTask = () => {

    const textChecking = tasks.find(function (element) {
      return element === task;
    });
    if (textChecking === undefined) {
      Keyboard.dismiss();
      setTasks([...tasks, task]);
      setTask(null);
    }
  };
 const completeTask=(text)=>{
  setTasks(
    tasks.filter(function (element) {
      return element !== text;
    })
  )
 }
  return (
    <View style={styles.container}>
      {/* Today tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks where go */}
          {tasks.length > 0 &&
            tasks.map(text => <TouchableOpacity key={text} onPress={()=>completeTask(text)}>
              <Task text={text} />
            </TouchableOpacity>)}
        </View>
      </View>

      {/* write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingRight: 10,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: '#C0C0C0',
  },
  addText: {},
});

export default Todo;
