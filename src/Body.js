import React, { Component } from 'react'

export default class Body extends Component {
  render() {
    return (
        <div className='container'>
        <div className='text-center p-5 mt-5 mb-5' style={{ backgroundColor: 'rgba(235, 235, 235, 0.5)' }}>
            <h1 className='fw-bolder text-dark'>A warm welcome!</h1>
            <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button type="button" className="btn btn-primary fs-4 ">Call to action</button>
        </div>
                {/*  */}
        <div className="row justify-content-between">
            <div className="col-3 mb-5 p-2 text-center m-2 position-relative" style={{ backgroundColor: 'rgba(235, 235, 235, 0.5)' }}>
                        <i className="fa-solid fa-folder bg-primary bg-gradient text-white rounded-3 p-3 fs-4 position-absolute top-0 start-50 translate-middle" />
            <h3 className='mt-5'>Fresh new layout</h3>
            <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
            </div>  
             {/*  */}
             <div className="col-3 mb-5 p-2 text-center m-2 position-relative" style={{ backgroundColor: 'rgba(235, 235, 235, 0.5)' }}>
                        <i className="fa-solid fa-cloud-arrow-down bg-primary bg-gradient text-white rounded-3 p-3 fs-4 position-absolute top-0 start-50 translate-middle" />
            <h3 className='mt-5'>Free to download</h3>
            <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
            </div>  
             {/*  */}
             <div className="col-3 mb-5 p-2 text-center m-2 position-relative" style={{ backgroundColor: 'rgba(235, 235, 235, 0.5)' }}>
                        <i className="fa-regular fa-credit-card bg-primary bg-gradient text-white rounded-3 p-3 fs-4 position-absolute top-0 start-50 translate-middle" />
            <h3 className='mt-5'>Jumbotron hero header</h3>
            <p>WThe heroic part of this template is the jumbotron hero header!</p>
            </div> 
             <div className="col-3 mb-5 p-2 p-2 text-center m-2 position-relative" style={{ backgroundColor: 'rgba(235, 235, 235, 0.5)' }}>
                        <i className="fa-solid fa-b bg-primary bg-gradient text-white rounded-3 pt-3 pb-3 ps-4 pe-4 fs-4 position-absolute top-0 start-50 translate-middle" />
            <h3 className='mt-5'>Feature boxes</h3>
            <p>We've created some custom feature boxes using Bootstrap icons!</p>
            </div>  
             {/*  */}
             <div className="col-3 mb-5 p-2 p-2 text-center m-2 position-relative" style={{ backgroundColor: 'rgba(235, 235, 235, 0.5)' }}>
                        <i className="fa-solid fa-code bg-primary bg-gradient text-white rounded-3 p-3 fs-4 position-absolute top-0 start-50 translate-middle" />
            <h3 className='mt-5'>Simple clean code</h3>
            <p>WWe keep our dependencies up to date and squash bugs as they come!</p>
            </div>  
             {/*  */}
             <div className="col-3 mb-5 p-2 p-2 text-center m-2 position-relative" style={{ backgroundColor: 'rgba(235, 235, 235, 0.5)' }}>
            <i className="fa-solid fa-certificate bg-primary bg-gradient text-white rounded-3 p-3 fs-4 position-absolute top-0 start-50 translate-middle" />
            <h3 className='mt-5'>A name you trust</h3>
            <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
            </div>  
             {/*  */}
        </div>
      </div>
        
    )
  }
}

