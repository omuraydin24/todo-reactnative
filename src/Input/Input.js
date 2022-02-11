import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './Input.styles';

const Input = ({onSubmit, todoRef, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        ref={todoRef}
        placeholder={'bişeyler yaz...'}
        onChangeText={onChangeText}
        placeholderTextColor="#FFF"
      />
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
