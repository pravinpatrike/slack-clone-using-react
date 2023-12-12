import React from 'react'
import './SidebarOption.css'

function SidebarOption({ Icon, title }) {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ?
                (<h3>{title}</h3>
                ) : (
                    <span> <h3> # {title} </h3> </span>
                )}
        </div>
    )
}

export default SidebarOption
