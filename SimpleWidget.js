import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const SimpleWidget = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tudo sobre filmes e desenhos animados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC0CB', // Rosa claro
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: '#FF69B4', // Rosa médio
    fontWeight: 'bold',
  },
});

export default SimpleWidget;
