import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ListPage()
{
  return (
    <View style={styles.title}>
      <Text> ListPage Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  } 
});

export default ListPage;