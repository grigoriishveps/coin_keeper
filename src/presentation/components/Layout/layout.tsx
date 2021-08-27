import {Switch, Route, Redirect} from 'react-router-dom'
import React from "react";
import MainPage from "../../pages/Main/main.page";
import CoinKeeper from "../coinKeeper/coinKeeper";

const Layout = ()=>{

    return (<>
        <Switch>

            <Route exact path="/page1" >
                <CoinKeeper link={'https://t.maze.co/49802747'}/>

            </Route>
            <Route exact path="/page2" >
                <CoinKeeper link={'https://t.maze.co/49781873'}/>

            </Route>
            <Route exact path="/page3" >
                <CoinKeeper link={'https://t.maze.co/49673543'}/>
            </Route>
            <Route path="*" >
                <Redirect to={'/page1'}/>
            </Route>
        </Switch>
    </>)
}

export default Layout
