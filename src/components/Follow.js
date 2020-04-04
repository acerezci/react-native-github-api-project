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
                <FollowIcon
                    source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/user-male.png' }}
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
                <FollowIcon
                    source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/user-male.png' }}
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
    font-size:15px;
    color:#24292e;
    font-family:SourceSansPro-SemiBold;
`;

const FollowerContainer = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    margin-right:10px;
`;

const FollowedContainer = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

const FollowIcon = styled.Image`
    width:15px;
    height:15px;
    margin-right:2px;
`;

export { Follow };