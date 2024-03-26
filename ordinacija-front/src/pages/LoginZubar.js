import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginZubar = () => {

    const [sifra, setSifra] = useState('')
    const navigator = useNavigate();
    const [error, setError] = useState('');


    const logIn = async (e) => {
        e.preventDefault();
    
        try {
            const jedinstvenaSifra = { sifra }
            const response = await axios.get('http://localhost:8080/zubar/login', { params: jedinstvenaSifra });
    
            if (response.status === 200) {
                navigator('/home');
            } else {
                console.error('Neuspešan odgovor sa servera');
                setError("Pogresna sifra!");
                return
            }
        } catch (error) {
            console.error('Greška prilikom komunikacije sa serverom:', error);
            setError("Pogresna sifra!");
        }
    }
    
  return (
    <div className='container'>
        <br/> <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Uloguj se</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb2'>
                            <label className='form-label'>Unesite vasu sifru:</label>
                            <input type='text'
                                placeholder='Unesite sifru'
                                name='sifra'
                                value={sifra}
                                className='form-control'
                                onChange={(e)=>setSifra(e.target.value)}
                            >
                            </input>
                        </div>
                        <br/>

                        <button className='btn btn-success' onClick={logIn}>Uloguj se</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>

                </div>


            </div>

        </div>

    </div>
  )
}
