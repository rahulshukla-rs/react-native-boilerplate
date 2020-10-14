import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const Home = ({ navigation }) =>
{
  return (
    <View style={styles.title}>
      <Text> Home Screen </Text>
      <Button
        title="Go to ListPage"
        onPress={() => navigation.navigate("ListPage")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  } 
});

export default Home;