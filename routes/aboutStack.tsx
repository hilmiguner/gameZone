import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from "../screens/about";
import Header from '../shared/header';

const stack = createStackNavigator();

export default function AboutStack({ navigation }:{ navigation:any }) {
    return (
        <stack.Navigator>
            <stack.Screen name="About" component={About} options={{
                header: () => <Header navigation={navigation} title="About GameZone"/>,
            }}/>
        </stack.Navigator>
    );
}