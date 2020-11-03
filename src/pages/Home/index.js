import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {

    function navigateToUsers() {
        navigation.navigate('Users');
    }

    return (
      <View>
        <Button title="navigate to users" onPress={() => navigateToUsers() }/>
      </View>
    );
}
