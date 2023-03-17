import React, { useState } from 'react'
import NavbarItem from '../Navbar_item/NavbarItem'
import "./Navbar.css"
import { nav_data } from "../../static_data"
function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar_logo">
                <h1>LOGO</h1>
            </div>
            <ul className='navbar_collection'>
                {
                    nav_data.map(nav => (
                        <NavbarItem title={nav.title} items={nav.items} />
                    ))
                }


            </ul>
        </div>
    )
}

export default Navbar