import {View, FlatList, Alert, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import Input from './Input/Input';
import TodoItem from './TodoItem/TodoItem';

const Todos = () => {
  const [todos, setTodos] = useState([{text: 'Buy coffee', key: '1'}]);
  const [inputText, setInputText] = useState('');
  const [editedText, setEditedText] = useState();

  const handleSubmit = () => {
    if (inputText == '') {
      Alert.alert('Please enter a todo...');
      return;
    }
    setTodos(prevTodos => {
      return [{text: inputText, key: new Date().toString()}, ...prevTodos];
    });
    todoRef.current.clear();
    setInputText('');
  };

  const handleEditSubmit = (text, key) => {
    setTodos(
      todos.map(todo => {
        if (todo.key === key) {
          return {...todo, text: editedText};
        }
        return todo;
      }),
    );
  };

  const handleRemove = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const renderTodos = ({item}) => {
    return (
      <TodoItem
        item={item}
        onRemove={handleRemove}
        onChangeText={setEditedText}
        onEditSubmit={handleEditSubmit}
      />
    );
  };

  const todoRef = useRef();

  return (
    <SafeAreaView
      style={{justifyContent: 'space-between', width: '100%', height: '100%'}}>
      <View>
        <FlatList data={todos} renderItem={renderTodos} />
      </View>
      <View>
        <Input
          onSubmit={handleSubmit}
          todoRef={todoRef}
          onChangeText={setInputText}
        />
      </View>
    </SafeAreaView>
  );
};

export default Todos;
