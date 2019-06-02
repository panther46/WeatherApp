import React from 'react';


function Header({titulo}){
    return(
        <div>
            <nav>
                <div className = "nav-wrapper custom-blue darken-2">
                    <a className = "brand-logo custom-yellow"href="#!">{titulo}</a>
                </div>
            </nav>
        </div>
    )
}


export default Header;