import React, {useContext, useEffect} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Header.css"
import {UserContext} from "../../App";

const Header = () => {
    // const profileImageStyle = {borderRadius: '50%',
    //     width: '35px',
    //     border: '1px solid darkGray',
    //     padding: "1px"
    // };

    // const [loggedInUser] = useContext(UserContext);
    // console.log(loggedInUser)

    const profileImageStyle = {
        borderRadius: '50%',
        width: '45px',
        border: '1px solid darkGray',
        padding: "1.5px"
    };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")))
        } else {
            setLoggedInUser('')
        }

    }, [])

    const handleLogout = () => {
        localStorage.clear()
        setLoggedInUser('')
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="ml-5 mr-5">
            <Navbar.Brand className="main-logo nav-link active text-dark" style={{fontSize: '30px'}}
            ><Link className="nav-link active text-dark mr-3" to="/">Fixman</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: 'gray'}}/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav className="align-items-center">
                    <Link style={{fontSize: '18px'}} to="/" className="nav-link active text-dark mr-3">Home</Link>
                    <Link style={{fontSize: '18px'}} to="/dashoboard/orders"
                          className="nav-link active text-dark mr-3">Services</Link>
                    <Link style={{fontSize: '18px'}} to="/admin"
                          className="nav-link active text-dark mr-3">Reviews</Link>
                    <Link style={{fontSize: '18px'}} to="/about" className="nav-link active text-dark mr-3">About</Link>
                    <Link style={{fontSize: '18px'}} to="/dashboard"
                          className="nav-link active text-dark mr-3">Dashboard</Link>
                    {
                        loggedInUser.isSignedIn
                            ? <div className="d-flex align-items-center">
                                <Link to="/" className="nav-link active text-dark">
                                    <img style={profileImageStyle} src={loggedInUser.photoURL} alt={loggedInUser.name}/>
                                </Link>
                                <Link style={{fontSize: '18px'}} to="/login" onClick={handleLogout}
                                      className="nav-link active text-dark">Sign
                                    Out</Link>
                            </div>
                            : <Link style={{fontSize: '18px'}} to="/login"
                                    className="nav-link active text-dark">Login</Link>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
