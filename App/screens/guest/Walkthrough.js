import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Walktrough()
{
  return (
    <View style={styles.title}>
      <Text> Walktrough Screens </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }
});

export default Walktrough;