import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/signup' replace></Navigate>
};

export default PrivetRoute;