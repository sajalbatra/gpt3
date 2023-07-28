import "./app.css"

//import Article from "./Components/article/article"
import Brand from "./Components/brand/Brand"
import Cta from "./Components/cta/Cta"
//import Feature from "./Components/feature/Feature"
import Navbar from "./Components/navbar/Navbar"
import Footer from "./containers/footer/Footer"
import Header from "./containers/header/Header"
import Features from "./containers/features/Features"
import Whatgpt3 from "./containers/whatgpt3/Whatgpt3"
import Possibilities from "./containers/possibilities/Possibilities"
import Blog from "./containers/blog/Blog"
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar/>
        <Header/>

      </div>
    <Brand/>
    <Whatgpt3/>
    <Features/>
    <Possibilities/>
    <Cta/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
/*
  <Navbar/>
        <Header/>



  
*/