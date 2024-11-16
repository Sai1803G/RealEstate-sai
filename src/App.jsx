import {Routes,Route} from 'react-router-dom'
import SearchPage from "./Components/SearchPage/SearchPage";
import FeaturedProperties from "./Components/FeaturedP/FeaturedProperties";
import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/About US/AboutUs";

import Home from './Components/Home';

function App() {
  return (
    
   <div>
    {/* <Home></Home> */}
     <Routes>
      {/* <Route path= '/' element={<Home></Home>}></Route> */}
      <Route path= '/' element={<Home></Home>}></Route> 
      <Route path= 'FeaturedProperties' element={<FeaturedProperties></FeaturedProperties>}></Route>
      <Route path= 'About' element={<AboutUs></AboutUs>}></Route>
      <Route path= 'Contact US' element={<Contact></Contact>}></Route>
      <Route path= 'SearchPage' element={<SearchPage></SearchPage>}></Route>
      <Route path= '/' element={<Home></Home>}></Route>

   </Routes> 
     
   
    {/* <FeaturedProperties></FeaturedProperties>
     <SearchPage></SearchPage> 
     <Contact></Contact> 
     <AboutUs></AboutUs>
    <TermsAndServices></TermsAndServices>
    <Footer></Footer>  */}
   </div>
    
  );
}

export default App;
