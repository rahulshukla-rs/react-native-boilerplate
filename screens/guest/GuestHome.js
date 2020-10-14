import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GuestHome()
{
  return (
    <View style={styles.title}>
      <Text> Login / Signup </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  } 
});

export default GuestHome;