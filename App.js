import React from 'react';
import { View } from "react-native";
import Home from './src/screen/Home';
import styled from 'styled-components';

const App = () => {
  return (
    <MainContainer>
      <Home />
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex:1;
`;

export default App;

