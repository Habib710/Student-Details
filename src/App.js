import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,  Routes } from 'react-router-dom';
import AddStudent from './Components/Add-new/AddStudent';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import UpDate from './Components/Update/UpDate';


function App() {
  return (
    <div >
      <Header></Header>
    
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/add' element={<AddStudent></AddStudent>}></Route>
        <Route  path="/update/:id" element={<UpDate></UpDate>}></Route>
      
      </Routes>
      <Footer></Footer>
  
    </div>
  );
}

export default App;
