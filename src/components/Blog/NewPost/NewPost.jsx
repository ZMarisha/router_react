import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

const NewPost = () => {

    let navigate = useNavigate();
    const {signOut} = useAuth();

    return(
        <div>
            <button onClick={()=> signOut(() => {
                navigate('/', {replace: true})
            })
            }>Log out</button>
            <h1>New Post</h1>
        </div>
    )
}

export { NewPost };