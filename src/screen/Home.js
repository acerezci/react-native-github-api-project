import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from './../components';
import { FlatList } from 'react-native';
import axios from 'axios';

const Item = ({ userName }) => {
    return (
        <ItemContainer
            onPress={() => console.log(userName)}
        >
            <Name>{userName}</Name>
        </ItemContainer>
    );
};

const UsersList = ({ item }) => {
    return (
        <FlatList
            data={item}
            renderItem={({ item }) =>
                <Item
                    userName={item}
                />}
            keyExtractor={item => item.length.toString()}
        />
    );
};

const Home = () => {
    const [userList, setUserList] = useState(['alperen', 'hasan', 'elif']);
    return (
        <HomeContainer>
            <Search />
            <UsersList item={userList} />
        </HomeContainer>
    );
};

const HomeContainer = styled.View`
    flex:1;
    background-color:#ddd;
`;

const ItemContainer = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    padding:10px;
    background-color: ${props => props.index % 2 === 0 ? '#ffffff' : '#fafafa'}
    border-bottom-width:1px;
    borderColor:#eee;
    borderStyle:solid;
`;

const Name = styled.Text`
    font-size: 16px;
`;

export default Home;
