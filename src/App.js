import React from 'react';
import {  Link, Route } from 'react-router-dom';
import Category from './Components/Category';
import Home from './Components/Home';
import Product from './Components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
   <nav className="navbar ">
<ul className="nav navbar-nav">

 <li><Link to="/">Home</Link></li>
 <li><Link to="/category">Category</Link></li>
 <li><Link to="/product">Product</Link></li>

</ul>
</nav>

<Route exact path="/" component={Home}/>
<Route path="/category" component={Category}/>
<Route path="/Product" component={Product}/>
      
    
    </div>
  );
}

export default App;
