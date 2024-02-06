import React, { Component } from 'react'

export default class Portofolo extends Component {
  render() {
    return (
      <>
      <div id="imgs">
        <div className="container ">
            <h1>PORTFOLIO COMPONENT</h1>
            <span className='text-center'>
            <i className="fa-solid fa-star"></i>
            </span>
            <div className="row g-4">

                <div className="col-md-4 ">
                    {/* <div className="imggs"> */}
                    <div className="imgs">
                    <img src="images/poert1.png" alt="home" />
                    <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                    </div>
                    </div>
                            
                    
                    </div>

                 <div className="col-md-4">
                 <div className="imgs">
                    <img src="images/port2.png" alt="cake" />
                    <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                    </div>
                    </div>
                  </div>   

                  <div className="col-md-4">
                  <div className="imgs">
                    <img src="images/port3.png" alt="serk" />
                    <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                    </div>
                    </div>
                  </div>

                  <div className="col-md-4 ">
                   
                    <div className="imgs">
                    <img src="images/poert1.png" alt="home" />
                    <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                    </div>
                    </div>
                    
        
                    
                    </div>

                 <div className="col-md-4">
                 <div className="imgs">
                    <img src="images/port2.png" alt="cake" />
                    <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                    </div>
                    </div>
                  </div>   

                  <div className="col-md-4">
                  <div className="imgs">
                    <img src="images/port3.png" alt="serk" />
                    <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                    </div>
                    </div>
                  </div>
              

            </div>
        </div>
      </div>


      
      
      
      
      
      
      
      </>
    )
  }
}
