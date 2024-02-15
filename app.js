import React from 'react';
import { View } from 'react-native';
import SimpleWidget from './SimpleWidget';
import Header from '../header';
import Body from './body';
import Footer from './footer';

const App = () => {
  return (
    <View>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

export default App;
