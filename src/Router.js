import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import User from './screens/User';

const MainStack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator >
                <MainStack.Screen name="Home" component={Home} />
                <MainStack.Screen name="User" component={User} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
