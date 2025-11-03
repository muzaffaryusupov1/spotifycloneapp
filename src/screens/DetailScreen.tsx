import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen 🎧</Text>
      <Text style={styles.song}>Song: No surprices</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 22, marginBottom: 10 },
  song: { fontSize: 18, color: 'gray', marginBottom: 20 },
});

export default DetailScreen;
