import React, { useEffect } from 'react';
import styled from 'styled-components';
import { UsersList, Loader } from '../components';
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import allActions from './../actions';

const MyModal = ({ route }) => {
    const dispatch = useDispatch();
    const { userName, followType } = route.params;
    useEffect(() => {
        dispatch(allActions.user.getUserFollow(userName, followType));
    }, []);
    useNavigation().setOptions({ title: followType === 'followers' ? 'Followers' : 'Following' });
    const followSelector = useSelector(state => state.followList);
    return (
        <ModalContainer>
            {
                followSelector.loading && <Loader />
            }
            {
                followSelector.followList.length > 0 ?
                    <UsersList item={followSelector.followList} /> :
                    <EmptyFollowListText>No {followType === 'followers' ? 'Followers' : 'Following'}</EmptyFollowListText>
            }

        </ModalContainer>
    );
};

const ModalContainer = styled.View`
    flex:1;
`;

const EmptyFollowListText = styled.Text`
    margin-top:10px;
    text-align:center;
    font-size:21px;
    font-family:SourceSansPro-SemiBold;
`;

export default MyModal;