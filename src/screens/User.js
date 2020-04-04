import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Loader, Profile } from './../components';

import { useSelector, useDispatch } from 'react-redux';
import allActions from './../actions';

import { useRoute, useNavigation } from '@react-navigation/native';

const User = () => {
    const [userName, setUserName] = useState(useRoute().params.userName);
    const navigation = useNavigation();
    dispatch = useDispatch();
    useEffect(() => {
        dispatch(allActions.user.getUser(userName));
    }, [userName]);

    const userSelector = useSelector(state => state.user);
    navigation.setOptions({ title: userSelector.user.name });

    return (
        <UserContainer>
            {
                userSelector.user && <Profile user={userSelector.user} />
            }
            {
                userSelector.loading && <Loader />
            }

        </UserContainer>
    );
};

const UserContainer = styled.View`
    flex:1;
    background-color:#ddd;
`;

const Text = styled.Text`
    font-size:21px;
`;

export default User;