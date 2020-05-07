import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Account({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account page</Text>
      <Button title='Go back' onPress={() => navigation.goBack()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 16,
    fontSize: 20
  }
});
