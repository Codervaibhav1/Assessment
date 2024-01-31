import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import CardSection from './component/CardComponent/CardSection';
import Footer from './component/Footer/Footer';
const App = () => {
  return (
    <div className=''>
      <Navbar/>
       <Home/>
       <CardSection/>
       <Footer/>
    </div>
  )
}
export default App