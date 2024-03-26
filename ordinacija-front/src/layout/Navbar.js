import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const handleLogout = () => {
        sessionStorage.removeItem('pacijent');
      };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/homePacijent">Ordinacija</a>


                    <div className="d-flex">
                        <Link className='btn btn-outline-light me-2 ' to="/zakazivanje">Zakazi termin</Link>
                        <Link className='btn btn-outline-light' onClick={handleLogout} to="/">Izloguj se</Link>
                    </div>
                </div>
            </nav>


        </div>
    )
}
