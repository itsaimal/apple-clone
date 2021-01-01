
import './App.css';
import './assets/output.css'
import Header from "./Header"
import CoverMain from "./CoverMain"
import CoverTwo from "./CoverTwo"
import CoverThree from "./CoverThree"
import Cards from "./Cards"
import Blackspacer from './Blackspacer';
import Whitespacer from "./Whitespacer"
import Footer from "./Footer"
import Mac from "./Mac"
import {Switch, Route} from "react-router-dom"
import Ipad from './Ipad';

import IphoneBox from './IphoneBox';
import LearnIphone from './LearnIphone';



function App() {
  return (

    <div >
      <Switch >
       

      <Route path="/mac">
      <Header/>
      <Mac/>
      </Route>

      <Route path="/ipad">
      <Header/>
      <Ipad/>

      </Route>


      


      <Route path="/">
        <Header/>
      <CoverMain/>
      <CoverTwo/>
      <Blackspacer/>
      <CoverThree/>
      <Whitespacer/>
      <Cards/>
      <Footer/>
     
      <IphoneBox/>
      <LearnIphone/>
    
      </Route>

      </Switch>

    
    
    </div>
  );
}

export default App;
