import React from 'react';
import styled from 'styled-components';

const UserDetail = ({ user }) => {
    return (
        <UserDetailContainer>
            {
                user.bio &&
                <DetailItemContainer>
                    <DetailItemIcon source={{ uri: 'https://img.icons8.com/ios/50/000000/parse-resume.png' }} />
                    <DetailItemText>{user.bio}</DetailItemText>
                </DetailItemContainer>
            }
            {
                user.company &&
                <DetailItemContainer>
                    <DetailItemIcon source={{ uri: 'https://img.icons8.com/dotty/24/000000/company.png' }} />
                    <DetailItemText>{user.company}</DetailItemText>
                </DetailItemContainer>
            }
            {
                user.created_at &&
                <DetailItemContainer>
                    <DetailItemIcon source={{ uri: 'https://img.icons8.com/ios/50/000000/calendar.png' }} />
                    <DetailItemText>{user.created_at.substring(0, 10)}</DetailItemText>
                </DetailItemContainer>
            }
        </UserDetailContainer>
    );
};

const UserDetailContainer = styled.View`
    flex-direction:column;
    margin-top:10px;
    border-top-width:.9px;
    borderColor:#848484;
    borderStyle:solid;
`;

const DetailItemContainer = styled.View`
    flex-direction:row;
    align-items:center;
    margin-bottom:10px;
    border-bottom-width:.9px;
    borderColor:#848484;
    borderStyle:solid;
    padding:15px;
`;

const DetailItemIcon = styled.Image`
    width:20px;
    height:20px;
`;

const DetailItemText = styled.Text`
    color:#24292e;
    font-size:15px;
    margin-left:10px;
`;

export { UserDetail };