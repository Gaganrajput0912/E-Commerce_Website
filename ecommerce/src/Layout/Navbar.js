const Navbar=()=>{
    return(
<nav className="navbar navbar-expand-lg bg-body-black 
 navbar-dark bg-dark navbar-light text-wrap">
  <div className="container-fluid">


    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto ms-auto .text-white">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Storie</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
        <div>
        <li className="nav-item">
          <a className="nav-link-active" href="#" aria-current="page">Cart</a>
        </li>
        </div>
    </div>
  </div>

</nav>
    )
}

export default Navbar;