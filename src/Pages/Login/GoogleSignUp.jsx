import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";

import { Button } from "react-bootstrap";
import { AuthContext } from "../../Provider/AuthProvider";


const GoogleSignUp = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Button onClick={handleGoogleSignIn} variant="outline-info" className=" w-100" >Google</Button>
        </div>
    );
};

export default GoogleSignUp;