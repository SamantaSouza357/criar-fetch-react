import React from 'react';
import {Link} from "react-router-dom";
import './Home.scss'
const Home = () => {
  return (
   <div className="Home">
     <h1>Deseja se cadastrar?</h1>
      <Link to="/Cadastro">
      <button>Cadastro</button>
      </Link>
   </div>
 
  )
}
export default Home;
