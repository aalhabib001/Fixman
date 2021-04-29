import './App.css';
import React, {createContext, useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Order from "./components/Order/Order";
import OrderList from "./components/OrderList/OrderList";
import Review from "./components/Review/Review";
import AddService from "./components/AddService/AddService";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState([])

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <PrivateRoute path="/dashboard/addService">
                        <AddService/>
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard">
                        <Dashboard/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/order">
                        <Order/>
                    </PrivateRoute>
                    <PrivateRoute path="/order/:serviceId">
                        <Order/>
                    </PrivateRoute>
                    <PrivateRoute path="/orders">
                        <OrderList/>
                    </PrivateRoute>
                    <PrivateRoute path="/review">
                        <Review/>
                    </PrivateRoute>
                </Switch>
                <Footer/>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
