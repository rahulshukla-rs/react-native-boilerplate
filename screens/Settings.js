import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Settings()
{
  return (
    <View style={styles.title}>
      <Text> Settings Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  } 
});

export default Settings;