import {View, Text, TouchableOpacity, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './TodoItem.styles';

const TodoItem = ({item, onRemove, onChangeText, onEditSubmit}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLongPressed, setIsLongPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View>
      <Pressable
        onPress={handlePress}
        onLongPress={() => setIsLongPressed(!isLongPressed)}
        delayLongPress={1000}>
        <View style={styles.container}>
          {!isLongPressed ? (
            <>
              <Text style={isPressed ? styles.textDone : styles.text}>
                {item.text}
              </Text>
              <TouchableOpacity
                style={styles.closeButtonContainer}
                onPress={() => onRemove(item.key)}>
                <Text style={styles.closeButton}>X</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput placeholder={item.text} onChangeText={onChangeText} />
              <TouchableOpacity
                style={styles.closeButtonContainer}
                onPress={() => {
                  setIsLongPressed(!isLongPressed);
                  onEditSubmit(item.text, item.key);
                }}>
                <Text style={styles.closeButton}>O</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default TodoItem;
