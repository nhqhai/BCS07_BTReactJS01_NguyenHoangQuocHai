import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='bg-dark text-white'>
        <div className='container bg-dark'>
        <nav className="navbar navbar-light bg-dark justify-content-between">
            <h1 className='fs-4'>Start Boostrap</h1>
{/*  */}
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="navbar navbar-nav">
      <a className="nav-item nav-link active text-white" href="#">Home <span className="sr-only"></span></a>
      <a className="nav-item nav-link text-secondary" href="#">About</a>
      <a className="nav-item nav-link text-secondary" href="#">Contact</a>
    </div>
</nav>
{/*  */}
        </nav> 
        </div>
           
  </div>
    )
  }
}
