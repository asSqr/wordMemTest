import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 32,
    color: 'rgb(95,177,237)'
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
        <Text>Home</Text>

        <TouchableOpacity onPress={Actions.test}>
            <Text style={styles.linkText}>Link</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home;