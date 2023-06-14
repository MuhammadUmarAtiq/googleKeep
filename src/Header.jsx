import React from "react"

const Header=()=>{
    return<>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Google Keep</a>
  <input class="form-control mr-sm-5 mx-5" type="text"  placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" >Search</button>
</nav>

    </>
}
export default Header;