

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