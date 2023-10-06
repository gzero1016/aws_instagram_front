import React from 'react';
import RootContainer from '../../components/Containers/RootContainer/RootContainer';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import ProfileLayout from '../../components/Layouts/ProfileLayout/ProfileLayout';
import ProfileMd from '../../components/Profile/ProfileMd/ProfileMd';
import ProfileBody from '../../components/Profile/ProfileBody/ProfileBody';


function Profile(props) {
    return (
        <RootContainer>
            <ProfileLayout>
                <ProfileHeader />
                <ProfileMd />
                <ProfileBody />
            </ProfileLayout>
        </RootContainer>
    );
}

export default Profile;