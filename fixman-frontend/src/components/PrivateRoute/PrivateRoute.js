import {UserContext} from "../../App";
import {useContext, useEffect} from "react";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(children, rest)
    return (
        <Route
            {...rest}
            render={({location}) =>
                loggedInUser.isSignedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;