import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
      <div id="contant">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>LOCATION</h1>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4">
                    <h1>AROUND THE WEB</h1>
                 
                    <div className="icon">
                   <ul className='d-flex justify-content-evenly align-items-center list-unstyled'>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                    <li><i className="fa-solid fa-globe"></i></li>
                   </ul>
                   </div>
                </div>
                <div className="col-md-4">
                    <h1>ABOUT FREELANCER</h1>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by
                     Route</p>
                </div>
            </div>
        </div>
      </div>

     <div id="end">
        <div className="container">
            <p>Copyright © Your Website 2021</p>
        </div>
     </div>

      </>
    )
  }
}
