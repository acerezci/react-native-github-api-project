import React from 'react';
import styled from 'styled-components';
import { Search, UsersList, Loader } from './../components';
import { useSelector } from 'react-redux';

const Home = () => {
    const searchSelector = useSelector(state => state.searchReducer);
    console.log(searchSelector);
    return (
        <HomeContainer>
            <Search />
            {
                searchSelector.error && <Text>Error! Try again later.</Text>
            }
            {
                searchSelector.loading && <Loader />
            }
            {
                searchSelector.users.length >= 1 && <UsersList item={searchSelector.users} />
            }
            {
                searchSelector.total_count === 0 && <Text>User is not found</Text>
            }
        </HomeContainer>
    );
};

const HomeContainer = styled.View`
    flex:1;
    background-color:#ddd;
`;

const Text = styled.Text`
    padding:10px;
    font-size:18px;
`;

export default Home;
