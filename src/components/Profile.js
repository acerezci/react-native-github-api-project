import React from 'react';
import styled from 'styled-components';
import { UserDetail, Follow } from './../components';

const Profile = ({ user }) => {
    return (
        <ProfileContainer>
            <TopContainer>
                <PictureContainer>
                    <Picture
                        source={{ uri: user.avatar_url }}
                    />
                </PictureContainer>
                <NameText>{user.name}</NameText>
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

const PictureContainer = styled.View`
    width:auto;
    height:auto;
    border-radius:5px;
    border:1px solid #24292e;
    margin-bottom:5px;
`;

const Picture = styled.Image`
    width:175px;
    height:175px;
    border-radius:5px;
`;

const TopContainer = styled.View`
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:5px;
`;

const NameText = styled.Text`
    font-size:20px;
    color:#24292e;
`;

export { Profile };