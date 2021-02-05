import React from 'react'
import Cover1 from './Cover1'
import Cover2 from './Cover2'
import Cover3 from './Cover3'
import Cover4 from './Cover4'
import Cover5 from './Cover5'
import Cover6 from './Cover6'
import Cover7 from './Cover7'
import {Switch,Route} from "react-router-dom"
import Cover8 from './Cover8'
import Cover9 from './Cover9'
import Cover10 from './Cover10'
import ScrollToTop from "../ScrollToTop"

function Music() {
    return (
        <div>
            <Cover1/>
            <Cover2/>
            <Switch>

            



<Route path="/sweat">
    <ScrollToTop>
            <Cover4/>
            </ScrollToTop>
            </Route>

            <Route path="/top">
                <ScrollToTop>
            <Cover5/>
            </ScrollToTop>
            </Route>

            <Route path="/update">
                <ScrollToTop>
            <Cover6/>
            </ScrollToTop>
            </Route>
            

            <Route path="/new">
                <ScrollToTop>
            <Cover7/>
            </ScrollToTop>
            </Route>

            <Route path="/">
                <ScrollToTop>
            <Cover3 />
            </ScrollToTop>
            </Route>
            </Switch>
            
            <Cover8/>

            <Cover9/>
            <Cover10/>
            
        </div>
    )
}

export default Music
