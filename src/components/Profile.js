import React from 'react';
import styled from 'styled-components';

const Profile = ({ user }) => {
    console.log(user);
    return (
        <ProfileContainer>
            <TopContainer>
                <Picture
                    source={{ uri: user.avatar_url }}
                />
                <NameText>{user.name}</NameText>
                <UserNameText>{user.login}</UserNameText>
            </TopContainer>
            <UserDetailContainer>
                {
                    user.company &&
                    <DetailItemContainer>
                        <DetailItemIcon source={{ uri: 'https://img.icons8.com/ios/50/000000/company.png' }} />
                        <DetailItemText>{user.company}</DetailItemText>
                    </DetailItemContainer>
                }
                {
                    user.bio &&
                    <DetailItemContainer>
                        <DetailItemIcon source={{ uri: 'https://img.icons8.com/ios/50/000000/resume.png' }} />
                        <DetailItemText>{user.bio}</DetailItemText>
                    </DetailItemContainer>
                }
                {
                    user.created_at &&
                    <DetailItemContainer>
                        <DetailItemIcon source={{ uri: 'https://img.icons8.com/ios/50/000000/calendar-plus.png' }} />
                        <DetailItemText>{user.created_at.substring(0, 10)}</DetailItemText>
                    </DetailItemContainer>
                }
            </UserDetailContainer>
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

const UserDetailContainer = styled.View`
    flex-direction:column;
`;

const DetailItemContainer = styled.View`
    flex-direction:row;
    align-items:center;
    margin-bottom:10px;
    border-bottom-width:.9px;
    borderColor:#616161;
    borderStyle:solid;
`;

const DetailItemIcon = styled.Image`
    width:20px;
    height:20px;
`;

const DetailItemText = styled.Text`
    font-size:14px;
    margin-left:5px;
`;

export { Profile };