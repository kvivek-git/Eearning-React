import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);

    if(!user){
        return <div>
            login first
        </div>
    }else{
        return <div>
            welcome {user.username}
        </div>
    }
}

export default Profile