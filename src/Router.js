import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import User from './screens/User';
import MyModal from './screens/MyModal';

const MainStack = createStackNavigator();

const Router = () => {
    const headerOptions = {
        headerStyle: { backgroundColor: '#24292e' },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    
    return (
        <NavigationContainer>
            <MainStack.Navigator mode="modal" screenOptions={headerOptions} >
                <MainStack.Screen name="Home" component={Home} options={{ title: 'Github Search' }} />
                <MainStack.Screen name="User" component={User} options={{ title: 'Profile' }} />
                <MainStack.Screen name="MyModal" component={MyModal} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
