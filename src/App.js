import { Outlet } from "react-router-dom";
import './App.css'

import { Header } from './components/layouts/header';
import { Footer } from "./components/layouts/footer";

const App = () => {  
  return (
    <div className="d-flex flex-column container-fluid scrollable" id="">
      <header className="row  py-3 px-0 m-0 ">
        <Header></Header>
      </header>    
      <div className="row h-100  p-0 m-0" id="divSideAndMain">
        
        <main className="col-12 h-100 p-0 scrollable">
          <Outlet></Outlet>
        </main>
      </div>

      <footer className="w-100 py-3 m-0 px-0 ">
        <Footer>
        
           
        </Footer>
      </footer>
     </div>
  );
  
} 

export default App;
