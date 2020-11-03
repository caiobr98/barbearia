import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home'
import Users from './Users'
import Agendamento from './Agendamento'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function Tabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Agendamento" component={Agendamento}/>
        </Tab.Navigator>
    )
}

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#7159c1' }, headerTintColor: '#FFF', justifyContent: 'center' }}>
            <Stack.Screen name="Home" component={Tabs} options={{ title: 'Dashboard' }} />
            <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
    )
}