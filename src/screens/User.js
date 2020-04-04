import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Loader, Profile, Repos } from './../components';

import { useSelector, useDispatch } from 'react-redux';
import allActions from './../actions';

import { useRoute, useNavigation } from '@react-navigation/native';

const User = () => {
    const userName = useRoute().params.userName;
    const navigation = useNavigation();
    dispatch = useDispatch();
    useEffect(() => {
        dispatch(allActions.user.getUser(userName));
        dispatch(allActions.user.getUserRepos(userName));
    }, [userName]);

    const userSelector = useSelector(state => state.user);
    const reposSelector = useSelector(state => state.repos);
    navigation.setOptions({ title: userSelector.user.name ? userSelector.user.name : userSelector.user.login });

    return (
        <UserContainer>
            {
                userSelector.user && <Profile user={userSelector.user} />
            }
            {
                userSelector.loading && <Loader />
            }
            {
                reposSelector.loading && <Loader />
            }
            {
                reposSelector.repos.length > 0 && <Repos repos={reposSelector.repos} />
            }

        </UserContainer>
    );
};

const UserContainer = styled.View`
    flex:1;
    background-color:#ddd;
`;

export default User;