import React, { Component } from 'react'
import Navpar from '../Navpar/Navpar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default class Layout extends Component {
  render() {
    return (
      <>
      <Navpar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
}
