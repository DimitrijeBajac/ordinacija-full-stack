import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarZubar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">Ordinacija</a>
                    

                    <Link className='btn btn-outline-light' to="/zakazivanjeZubar">Zakazi termin</Link>
                </div>
            </nav>


        </div>
    )
}