import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export interface IButton {
  text: string;
  onClick: Function;
}

export const Button = ({text, onClick}: IButton) => {
  return (
    <Pressable style={styles.button} onPress={() => onClick()} testID={'show'}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    borderColor: '#002899',
  },
  buttonText: {
    textAlign: 'center',
  },
});
