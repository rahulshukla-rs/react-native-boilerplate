import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () =>
{
  return (
    <View style={styles.title}>
      <Text> About Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  } 
});

export default About;