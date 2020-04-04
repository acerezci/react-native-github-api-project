import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
const Follow = ({ user }) => {
    const navigation = useNavigation();
    return (
        <FollowContainer>
            <FollowerContainer
                onPress={() => {
                    navigation.navigate('MyModal', {
                        userName: user.login, followType: 'followers'
                    });
                }}
            >
                <FollowerIcon
                    source={{ uri: 'https://img.icons8.com/ios/50/000000/user.png' }}
                />
                <FollowText>{user.followers} followers</FollowText>
            </FollowerContainer>
            <FollowedContainer
                onPress={() => {
                    navigation.navigate('MyModal', {
                        userName: user.login, followType: 'following'
                    });
                }}
            >
                <FollowedIcon
                    source={{ uri: 'https://img.icons8.com/android/24/000000/new-moon.png' }}
                />
                <FollowText>{user.following} following</FollowText>
            </FollowedContainer>
        </FollowContainer>
    );
};

const FollowContainer = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

const FollowText = styled.Text`
    font-size:16px;
`;

const FollowerContainer = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    margin-right:10px;
`;

const FollowedContainer = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
`;

const FollowerIcon = styled.Image`
    width:25px;
    height:25px;
    margin-right:3px;
`;

const FollowedIcon = styled.Image`
    width:7px;
    height:7px;
    margin-right:3px;
`;

export { Follow };