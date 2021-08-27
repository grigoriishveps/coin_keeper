import {Switch, Route, Redirect} from 'react-router-dom'
import React from "react";
import MainPage from "../../pages/Main/main.page";

const Layout = ()=>{

    return (<>
        <Switch>
            <Route exact path="/" >

                <MainPage/>
            </Route>
            <Route path="*" >
                <Redirect to={'/'}/>
            </Route>
        </Switch>
    </>)
}

export default Layout
