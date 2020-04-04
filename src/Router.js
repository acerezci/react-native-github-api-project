import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import User from './screens/User';
import MyModal from './screens/MyModal';

const MainStack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator mode="modal" >
                <MainStack.Screen name="Home" component={Home} />
                <MainStack.Screen name="User" component={User} />
                <MainStack.Screen name="MyModal" component={MyModal} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
