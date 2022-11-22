import React from 'react'
import "../style.scss"
import Navbar from "../components/Navbar"
import Search from "../components/Search"

 function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
    </div>
  )
}
export default Sidebar;