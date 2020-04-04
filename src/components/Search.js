import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import allActions from './../actions';

const Search = () => {
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();

    return (
        <SearchContainer>
            <SearchInput placeholder="Github User" onChangeText={(text) => setUserName(text)} />
            <SearchButton
                onPress={() => {
                    if (userName.length >= 1)
                        dispatch(allActions.search.getSearchResult(userName));
                }}
            >
                <SearchButtonText>Search</SearchButtonText>
            </SearchButton>
        </SearchContainer>
    );
};

const SearchContainer = styled.View`
    padding:10px;
    background-color:#ddd;
`;

const SearchInput = styled.TextInput`
    font-size:16px;
    background-color:#fafafa;
    height:40px;
    border-radius:5px
    border:1px solid #dedede;
    padding:10px;
    color:#24292e;
`;

const SearchButton = styled.TouchableOpacity`
    background-color:#fff;
    padding:10px;
    margin-top:10px;
    align-items:center;
    border:1px solid #c4c9cc;
    border-radius:5px;
    height:40px;
    justify-content:center;
`;

const SearchButtonText = styled.Text`
    font-size:16px;
    font-weight:bold;
    color:#24292e;
`;

export { Search };