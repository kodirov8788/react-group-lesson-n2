import React, { useState } from 'react'

function NavbarItem(props) {

    const [click, setClick] = useState(false)
    console.log(click)
    const NavbarOpen = () => {
        setClick(true)
    }
    const NavbarClose = () => {
        setClick(false)
    }
    return (
        <li onMouseEnter={NavbarOpen} onMouseLeave={NavbarClose}>
            <div className={`hover_effect ${click ? "active" : ""}`}>
                {
                    props.items.map(item => (
                        <li>
                            <a href="#">{item.item_name}</a>
                        </li>
                    ))
                }
            </div>
            <a href="#">{props.title}</a>
        </li>
    )
}

export default NavbarItem