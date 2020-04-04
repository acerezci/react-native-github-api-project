import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import allActions from './../actions';
import { debounce } from 'lodash';

const Search = () => {
    const dispatch = useDispatch();
    const handleChange = debounce((text) => {
        if (text.length > 0)
            dispatch(allActions.search.getSearchResult(text));
    }, 750);

    return (
        <SearchContainer>
            <SearchInput placeholder="Github User" onChangeText={text => {
                if (text.length === 0)
                    dispatch(allActions.search.resetSearchData());
                handleChange(text);

            }} />
        </SearchContainer>
    );
};

const SearchContainer = styled.View`
    padding:10px;
`;

const SearchInput = styled.TextInput`
    font-size:16px;
    background-color:#f6f8fa;
    height:40px;
    border-radius:5px
    border:1.5px solid #24292e;
    padding:10px;
    color:#24292e;
`;

export { Search };