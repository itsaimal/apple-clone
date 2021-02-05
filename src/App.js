
import './App.css';
import './assets/output.css'
import Header from "./Header"
import CoverMain from "./CoverMain"
<<<<<<< Updated upstream
=======
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
import LearnPhonePro from './LearnPhonePro';
import IphoneProBox from './IphoneProBox';
import FitnessPlus from './FitnessPlus';
import Iphone from './Iphone/Iphone';
import Watch from './Watch/Watch';
import Tv from './Tv/Tv';
import Home from './Home';
import Checkout from './Checkout';
import Music from './Listen/Music';
import ScrollToTop from "./ScrollToTop"
import SmHeader from './SmHeader';


>>>>>>> Stashed changes

function App() {
  return (
    <div >
<<<<<<< Updated upstream
      <Header/>
      <CoverMain/>
=======
      <SmHeader/>
      <Switch >
       
     
      <Route path="/mac">
      <ScrollToTop>
      <Header/>
      <Mac/>
      </ScrollToTop>
      </Route>
    

      <Route path="/ipad">
      <ScrollToTop>
      <Header/>
      <Ipad/>
      <Footer/>
</ScrollToTop>
      </Route>


      <Route path="/iphoneBuy">
        <ScrollToTop>
      <Header/>
      <IphoneBox/>
      <Footer/></ScrollToTop>
      </Route>


      <Route path="/iphoneLearn">
      <ScrollToTop>
      <Header/>
      <LearnIphone/>
      <Footer/>
      </ScrollToTop>
      </Route>


      <Route path="/iphoneProLearn">
        <ScrollToTop>
      <Header/>
      <LearnPhonePro/>
      <Footer/></ScrollToTop>
    </Route>


      <Route path="/iphoneProBuy">
        <ScrollToTop>
      <Header/>
      <IphoneProBox/>
      <Footer/>
      </ScrollToTop>
    </Route>

      <Route path="/fitness+">
      <ScrollToTop>
      <Header/>
      <FitnessPlus/>
      <Footer/>
      </ScrollToTop>
      </Route>


<Route path="/iphone">
<ScrollToTop>
<Header/>
<Iphone/>
<Footer/>
</ScrollToTop>
</Route>


<Route path="/watch">
<ScrollToTop>
<Header/>
<Watch/>
<Footer/>
</ScrollToTop>
</Route>


<Route path="/tv">
  <ScrollToTop>
<Header/>
<Tv/>
<Footer/>
</ScrollToTop>
</Route>

<Route path="/music">
  <ScrollToTop>
<Header/>
<Music/>
<Footer/>
</ScrollToTop>
</Route>


<Route path="/checkout">
   <ScrollToTop>
<Checkout/>
<Footer/>
</ScrollToTop>
</Route>


    
 <Route path="/market">
   <ScrollToTop>
 <Header/>
<Home/>
<Footer/>
</ScrollToTop>
</Route>



     
  

    

      


      <Route path="/">
      <ScrollToTop>
        <Header/>
      <CoverMain/>
      <CoverTwo/>
      <Blackspacer/>
      <CoverThree/>
      <Whitespacer/>
      <Cards/>
      <Footer/>
    
     
      
      </ScrollToTop>
      </Route>

      </Switch>

    
>>>>>>> Stashed changes
    
    </div>
  );
}

export default App;
