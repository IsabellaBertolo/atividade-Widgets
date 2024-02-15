import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Body = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Corpo - Tudo sobre a vida </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});

export default Body;
