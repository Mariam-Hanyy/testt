import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
      <div id="contact">
        <div className="container ">
            <h1>CONATCT SECTION</h1>
            <span className='text-center '>
            <i className="fa-solid fa-star "></i>
            </span>
            
            <form className= "w-75 m-auto" >
                <label For="UserName"></label>
                <input className='form-control py-2' type="text" name='name' id='UserName' placeholder='UserName' />

                <label For="UserAge"></label>
                <input className='form-control py-2' type="number" name='age' id='UserAge' placeholder='UserAge' />
                <label  For="UserEmail"></label>
                <input className='form-control py-2' type="email" name='email' id='UserEmail' placeholder='UserEmail' />
                <label For="UserPassword"></label>
                <input className='form-control py-2' type="password" name='paassword' id='UserPassword' placeholder='UserPassword' />
                 
                 <button className ="btn btnColor ">
                    send Message
                 </button>






            </form>

        </div>
      </div>
      
      
      
      
      
      
      
      
      
      
      
      </>
    )
  }
}
