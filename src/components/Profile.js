import React from 'react';
import styled from 'styled-components';
import { UserDetail, Follow } from './../components';

const Profile = ({ user }) => {
    return (
        <ProfileContainer>
            <TopContainer>
                <Picture
                    source={{ uri: user.avatar_url }}
                />
                <NameText>{user.name}</NameText>
                <UserNameText>{user.login}</UserNameText>
            </TopContainer>
            <Follow user={user} />
            <UserDetail user={user} />
        </ProfileContainer>
    );
};

const ProfileContainer = styled.View`
    flex-direction:column;
    padding:10px;
`;

const Picture = styled.Image`
    width:200px;
    height:200px;
    border-radius:5px;
    margin-bottom:5px;
`;

const TopContainer = styled.View`
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:5px;
`;

const NameText = styled.Text`
    font-size:20px;
`;

const UserNameText = styled.Text`
    font-size:16px;
    color:#808080
`;

export { Profile };