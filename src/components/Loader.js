import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';

const Loader = () => {
    return (
        <LoaderContainer>
            <ActivityIndicator size="large" color="#fcc101" />
        </LoaderContainer>
    );
};

const LoaderContainer = styled.View`
    flex:1;
    position:absolute;
    top:50%;
    left:50%;
    z-index:999;
`;

export { Loader };
