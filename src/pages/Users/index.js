import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default function Users({navigation}){

    function goToHome(){
        navigation.navigate('Home', {
            screen: 'Users'
        });
    }

    return (
      <View>
        <Button title="go to home" onPress={() => goToHome()}/>
      </View>
    );
}
