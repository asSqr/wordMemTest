import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Actions,
  ActionConst,
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

const Test = () => {
  return (
    <View style={styles.container}>
        <Text>Test</Text>

        <TouchableOpacity onPress={() => { Actions.home({ type: ActionConst.RESET }); }}>
            <Text style={styles.linkText}>Link</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Test;