import React from 'react'
import "./Sidebar.css"
function Sidebar(props) {

    return (
        <div className={`sidebar ${props.result ? "show" : ""}`}>Sidebar</div>
    )
}

export default Sidebar