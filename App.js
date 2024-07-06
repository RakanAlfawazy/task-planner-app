import { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import EditModal from './components/EditModal';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), value: task }]);
      setTask('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditTaskValue(taskToEdit.value);
      setCurrentTaskId(taskId);
      setIsEditing(true);
    }
  };

  const saveEditTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === currentTaskId ? { ...task, value: editTaskValue } : task
      )
    );
    setIsEditing(false);
    setEditTaskValue('');
    setCurrentTaskId(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem item={item} editTask={editTask} removeTask={removeTask} />
        )}
      />
      <EditModal
        isEditing={isEditing}
        editTaskValue={editTaskValue}
        setEditTaskValue={setEditTaskValue}
        saveEditTask={saveEditTask}
        setIsEditing={setIsEditing}
      />
    </SafeAreaView>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    paddingTop: 50,
  },
});

