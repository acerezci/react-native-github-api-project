import React from 'react';
import styled from 'styled-components';

const User = () => {
    return (
        <UserContainer>
            <Text>USER SCREEN</Text>
        </UserContainer>
    );
};

const UserContainer = styled.View`
    flex:1
`;

const Text = styled.Text`
    font-size:16px;
`;

export default User;