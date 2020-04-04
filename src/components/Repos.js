import React from 'react';
import styled from 'styled-components';

const Item = ({ name, description, stars, forks, issues, index }) => {
    return (
        <Container index={index}>
            <RepoName>{name}</RepoName>
            {
                description && <RepoDesc>{description}</RepoDesc>
            }
            <BottomContainer>
                <ItemContainer>
                    <Icon source={{ uri: 'https://img.icons8.com/android/24/000000/star.png' }} />
                    <ItemBottomText>{stars} stars</ItemBottomText>
                </ItemContainer>
                <ItemContainer>
                    <Icon source={{ uri: 'https://img.icons8.com/material-sharp/24/000000/code-fork.png' }} />
                    <ItemBottomText>{forks} forks</ItemBottomText>
                </ItemContainer>
                <ItemContainer>
                    <DatIcon source={{ uri: 'https://img.icons8.com/android/24/000000/new-moon.png' }} />
                    <ItemBottomText>{issues} issues</ItemBottomText>
                </ItemContainer>
            </BottomContainer>
        </Container>
    );
};

const Repos = ({ repos }) => {
    return (
        <RepoContainer>
            <RepoHeader>Repositories</RepoHeader>
            {
                repos.map((item, index) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        index={index}
                        stars={item.stargazers_count}
                        forks={item.forks_count}
                        issues={item.open_issues_count}
                    />
                ))
            }
        </RepoContainer>
    );
};


const RepoContainer = styled.View`
    flex:1;
`;

const RepoHeader = styled.Text`
    font-size:21px;
    font-weight:700;
    color:#24292e;
    padding:0 0 5px 20px;
    border-bottom-width:2px;
    borderColor:#848484;
    borderStyle:solid;
`;


const Container = styled.View`
    flex-direction:column;
    padding:10px;
    padding:15px;
    border-bottom-width:.9px;
    borderColor:#848484;
    borderStyle:solid;
`;

const RepoName = styled.Text`
    font-size:16px;
    font-weight:bold;
`;

const RepoDesc = styled.Text`
    font-size:14px;
`;

const BottomContainer = styled.View`
    flex-direction:row;
`;

const ItemContainer = styled.View`
    flex-direction:row;
    margin-top:5px;
    margin-right:10px;
    align-items:center;
`;

const Icon = styled.Image`
    width:15px;
    height:15px;
    margin-right:4px;
`;

const ItemBottomText = styled.Text`
    font-size:15px;
`;

const DatIcon = styled.Image`
    width:5px;
    height:5px;
    margin-right:4px;
`;


export { Repos };