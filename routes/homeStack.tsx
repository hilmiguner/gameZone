import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const stack = createStackNavigator();

export default function HomeStack({ navigation }:{ navigation:any }) {
    return (
        <stack.Navigator>
            <stack.Screen name="Home" component={Home} options={{
                header: () => <Header navigation={navigation} title="GameZone"/>,
                // title: "Home",
                // headerStyle: {
                //     backgroundColor: "#eee",
                //     height: 100,
                // },
                // headerTintColor: "#444",
            }}/>
            <stack.Screen name="details" component={ReviewDetails} options={{
                title: "Review Details",
                headerStyle: {
                    backgroundColor: "#eee",
                    height: 100,
                },
                headerTintColor: "#444",
            }}/>
        </stack.Navigator>
    );
}