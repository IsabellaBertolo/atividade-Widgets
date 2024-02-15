import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Rodapé -2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#c0c0c0',
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Footer;
