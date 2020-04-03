import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';

const Item = ({ userName, avatar, index }) => {
    return (
        <ItemContainer
            onPress={() => console.log(userName)}
            index={index}
        >
            <Avatar source={{ uri: avatar }} />
            <Name>{userName}</Name>
            <RightIcon source={{ uri: 'https://img.icons8.com/ios/50/000000/forward--v1.png' }} />
        </ItemContainer>
    );
};

const UsersList = ({ item }) => {
    return (
        <FlatList
            data={item}
            renderItem={({ item, index }) =>
                <Item
                    userName={item.login}
                    avatar={item.avatar_url}
                    index={index}
                />
            }
            keyExtractor={item => item.id.toString()}
        />
    );
};

const ItemContainer = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    padding:10px;
    background-color: ${props => props.index % 2 === 0 ? '#ffffff' : '#fafafa'}
    border-bottom-width:1px;
    borderColor:#eee;
    borderStyle:solid;
`;

const Avatar = styled.Image`
    width:50px;
    height:50px;
    border-radius:25px;
    margin-right:15px;
`;

const Name = styled.Text`
    font-size: 17px;
`;

const RightIcon = styled.Image`
    width:20px;
    height:20px;
    position:absolute;
    right:25px;
`;

export { UsersList };