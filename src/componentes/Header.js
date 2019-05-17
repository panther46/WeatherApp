import React from 'react';


const Header = (props) => {
    return(
        <div>
            <nav>
                <div className = "nav-wrapper custom-blue darken-2">
                    <a className = "brand-logo custom-yellow"href="false">{props.titulo}</a>
                </div>
            </nav>
        </div>
    )
}


export default Header;