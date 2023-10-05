import React from 'react';
import { getUser } from '../../apis/api/user';
import jwt_Decode from 'jwt-decode';
import RootContainer from '../../components/Containers/RootContainer/RootContainer';
import AddFeedModal from '../../components/Modals/AddFeedModal/AddFeedModal';

function Home(props) {
    try {
        let decoded = jwt_Decode(localStorage.getItem("accessToken").substring(7));
        console.log(`LoginUsername: ${decoded.username}`);
        getUser(decoded.username);
    } catch(error) {
        console.log(error);
    }

    return (
        <RootContainer>
            
        </RootContainer>
    );
}

export default Home;