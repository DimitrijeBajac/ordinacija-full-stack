import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [jmbg, setJmbg] = useState('')
    const navigator = useNavigate();
    const [error, setError] = useState('');


    const logIn = async (e) => {
        e.preventDefault();
    
        if (jmbg.length !== 13) {
            console.error('JMBG mora biti tačno 13 brojeva.');
            return;
        }
    
        try {
            const jedinstveniBroj = { jmbg }
            const response = await axios.get('http://localhost:8080/pacijenti/login', { params: jedinstveniBroj });
    
            if (response.status === 200) {
                sessionStorage.setItem('pacijent', JSON.stringify(response.data));
                navigator('/homePacijent');
            } else {
                console.error('Neuspešan odgovor sa servera');
                setError("Morate da izvrsite registraciju!");
                return
            }
        } catch (error) {
            console.error('Greška prilikom komunikacije sa serverom:', error);
            setError("Morate da izvrsite registraciju!");
        }
    }
    

    const register = (e)=>{
        navigator('/registracija');
    }
    const loginZubar = (e)=>{
        navigator('/logInZubar');
    }




  return (
    <div className='container'>
        <br/> <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Dobro dosli</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb2'>
                            <label className='form-label'>Unesite vas jmbg:</label>
                            <input type='text'
                                placeholder='Unesite jmbg'
                                name='jmbg'
                                value={jmbg}
                                className='form-control'
                                onChange={(e)=>setJmbg(e.target.value)}
                            >
                            </input>
                        </div>
                        <br/>

                        <button className='btn btn-success' onClick={logIn}>Uloguj se</button>
                        <button className='btn btn-success mx-2' onClick={register}>Registruj se</button>
                        <button className='btn btn-success mx-2 mt-2' onClick={loginZubar}>Uloguj se kao zubar</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>

                </div>


            </div>

        </div>

    </div>
  )
}
