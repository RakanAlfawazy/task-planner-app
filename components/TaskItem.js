import { View, Text, Pressable, StyleSheet } from 'react-native';

const TaskItem = ({ item, editTask, removeTask }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.value}</Text>
      <View style={styles.taskActions}>
        <Pressable onPress={() => editTask(item.id)} style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </Pressable>
        <Pressable onPress={() => removeTask(item.id)} style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
    flex: 1,
  },
  taskActions: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#ffc107',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  editText: {
    color: 'white',
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
    fontSize: 14,
  },
});

export default TaskItem;